const express = require('express')
const router = express.Router()
const Vehicle = require('../controllers/vehicle.controller');


router.post('/addVehicle', Vehicle.create);
router.get('/vehicles/:id', Vehicle.findById);
router.put('/editVehicle/:id', Vehicle.update);
router.delete('/deleteVehicle/:id', Vehicle.delete);

module.exports = router