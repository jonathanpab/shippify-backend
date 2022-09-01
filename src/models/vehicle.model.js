'use strict';
var dbConn = require('./../../config/db.config');

//Vehicle object create
var Vehicle = function(vehicle){
    this.id = vehicle.id;
    this.driver_id = vehicle.driver_id;
    this.plate = vehicle.plate;
    this.model = vehicle.model;
    this.type = vehicle.type;
    this.capacity = vehicle.capacity;
    this.creation_date = vehicle.creation_date;
};
Vehicle.create = function (newDoc, result) {
    dbConn.query("INSERT INTO vehicle set ?", newDoc, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });           
};

Vehicle.findByDriverId = function (driver_id, result) {
    dbConn.query("Select * from vehicle where driver_id = ?", driver_id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Vehicle.findById = function (id, result) {
    dbConn.query("Select * from vehicle where id = ?", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Vehicle.findAll = function ( params, result) {
    const offset = params.page && params.limit ? params.page * params.limit : 10;
    const limit = params.limit ? Number(params.limit) : 10;

    dbConn.query("Select * from vehicle LIMIT ? OFFSET ?", [ limit, offset] , function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Vehicle.update = function(id, vehicle, result){
  dbConn.query("UPDATE vehicle SET driver_id=?,plate=?,model=?,type=?,capacity=?,creation_date=? WHERE id = ?", [vehicle.driver_id,vehicle.plate,vehicle.model,vehicle.type,vehicle.capacity,vehicle.creation_date, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Vehicle.delete = function(id, result){
    dbConn.query("DELETE FROM vehicle WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Vehicle;