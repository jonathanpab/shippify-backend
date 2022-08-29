const express = require('express')
const router = express.Router()
const Vehicle = require('../controllers/vehicle.controller');


router.post('/addVehicle', Vehicle.create);
router.get('/vehicles/:driver_id', Vehicle.findByDriverId);
router.get('/vehicle/:id', Vehicle.findById);
router.get('/vehicles/', Vehicle.findAll);
router.put('/editVehicle/:id', Vehicle.update);
router.delete('/deleteVehicle/:id', Vehicle.delete);

module.exports = router