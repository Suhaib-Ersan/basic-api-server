'use strict';

const express = require('express');
const router = express.Router();

const { Clothes } = require('../models/index.model.js');

router.post('/clothes', Clothes.create); // creates one cloth obj
router.get('/clothes', Clothes.getAll); // gets all clothes objs
router.get('/clothes/:id', Clothes.getOne); // gets one cloth obj
router.put('/clothes/:id', Clothes.update); // updates one cloth obj
router.delete('/clothes/:id', Clothes.delete); // deletes one cloth obj


module.exports = router;
