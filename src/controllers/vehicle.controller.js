'use strict';

const Vehicle = require('../models/vehicle.model');

exports.create = function(req, res) {
    const new_vehicle = new Vehicle(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Vehicle.create(new_vehicle, function(err, vehicle) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Vehicle added successfully!",data:vehicle});
        });
    }
};

exports.findByDriverId = function(req, res) {
    Vehicle.findByDriverId(req.params.driver_id, function(err, vehicle) {
        if (err)
        res.send(err);
        res.json(vehicle);
    });
};

exports.findById = function(req, res) {
    Vehicle.findById(req.params.id, function(err, vehicle) {
        if (err)
            res.send(err);
        res.json(vehicle);
    });
};

exports.findAll = function(req, res) {
    Vehicle.findAll( req.params, function(err, vehicle) {
        if (err)
        res.send(err);
        res.json(vehicle);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Vehicle.update(req.params.id, new Vehicle(req.body), function(err) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Vehicle successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
  Vehicle.delete( req.params.id, function(err) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Vehicle successfully deleted' });
  });
};