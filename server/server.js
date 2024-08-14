const express = require('express')
const app = express()
const port = 3001
const subsidence_model = require('./subsidenceModel')
const cors = require('cors');
app.use(express.json())
app.use(cors());

app.get('/:lat/:lng', (req, res) => {
    const lat = req.params.lat;
    const lng = req.params.lng;
    subsidence_model.getSubsidence(lat, lng)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})