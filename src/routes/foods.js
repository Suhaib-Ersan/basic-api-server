'use strict';

const express = require('express');
const router = express.Router();

const { Foods } = require('../models/index.model.js');


router.post('/food', Foods.create); // creates one food obj
router.get('/food', Foods.getAll); // gets all food objs
router.get('/food/:id', Foods.getOne); // gets one food obj
router.put('/food/:id', Foods.update); // updates one food obj
router.delete('/food/:id', Foods.delete); // deletes one food obj


module.exports = router;