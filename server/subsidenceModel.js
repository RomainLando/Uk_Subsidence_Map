require('dotenv').config()
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const getSubsidence = async (lat, lng) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            `
            SELECT learning."GeoClimateUKCP18_ShrinkSwell_2070_Average_Open".class
            FROM learning."GeoClimateUKCP18_ShrinkSwell_2070_Average_Open"
            WHERE ST_Within(ST_Transform(ST_Point($2, $1, 4326), 4326), 
            learning."GeoClimateUKCP18_ShrinkSwell_2070_Average_Open".geom) IS TRUE;        
            `,
            [lat, lng],
            (error, results) => {
            if (error) {
                console.log("SQL server error");
                console.log(error);
                reject(error);
            }
            if (results) {
                if (results.rows.length > 0) {
                    resolve(
                        JSON.stringify(results.rows)
                    );
                } else {
                    resolve(
                        JSON.stringify([ { class: 'Unavailable' } ])
                    );
                }
            }}
        );
    });
  };

module.exports = {
    getSubsidence,
};
    