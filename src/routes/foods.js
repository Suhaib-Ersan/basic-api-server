'use strict';

const express = require('express');
const router = express.Router();

const { Foods } = require('../models/index.model.js');


router.post('/foods', Foods.create); // creates one food obj
router.get('/foods', Foods.getAll); // gets all food objs
router.get('/foods/:id', Foods.getOne); // gets one food obj
router.put('/foods/:id', Foods.update); // updates one food obj
router.delete('/foods/:id', Foods.delete); // deletes one food obj


module.exports = router;