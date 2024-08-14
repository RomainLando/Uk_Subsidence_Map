# Subsidence Risk Prediction Interactive Mapper (UK - 2070)

## Context

This application was built as a proof of concept for a job application. It is built to showcase an understanding of full-stack competencies, including the use of [Geospatial data](https://www.bgs.ac.uk/datasets/geoclimateukcp18-open/) with GIS tools: [PostGIS](https://postgis.net/).

## Build specs

This is a [React app](https://react.dev/), leveraging the use of [leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/) for developing an interactive map on the front end.

tools such as express and npm pg were used to facilitate the creation of APIs.

## How to run it:

You will first need to download PostGRES, PostGIS, the [dataset](https://www.bgs.ac.uk/datasets/geoclimateukcp18-open/) and store the data into the database (for this I used [QGIS](https://www.qgis.org/)). **Make sure to import the data using CRS ESPG:4326** otherwise you will have to modify the SQL query. Either change the table names in my sql query or use the same names for your table; this can be found in *server/subsidenceModel.js*.
Once you have clone the repo and have a local copy, you will have to create a .env file in the server folder and store the information that will be used to connect to your database.

From here you should initiate and then run the client using `npm start`, and the server using `npm run server:dev` for developer mode.

### Further work

* Testing
* Styling
* Adding dataset for 2030 predictions
