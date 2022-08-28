'use strict';

const mysql = require('mysql');
const db_config = {
    connectionLimit : 10,
    host     : 'shippify4.cv2sgxogwffx.sa-east-1.rds.amazonaws.com',
    user     : 'candidate5',
    password : 'ubnpS3rySnj88Sum',
    database : 'shippify5'
};
const dbConn = mysql.createPool(db_config);

module.exports = dbConn;