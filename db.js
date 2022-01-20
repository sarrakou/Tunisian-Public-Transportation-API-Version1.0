const Pool = require("pg").Pool;

const pool = new Pool({
    user: "qovzvmforjutep",
    password : "2ae75bebcdf030f0b9594ca44c3a78207c5d9057a16df91d9ddcf474ec921510",
    database: "dj25icmpreq6h",
    host: "ec2-34-230-198-12.compute-1.amazonaws.com",
    port:5432
}); 

module.exports = pool;