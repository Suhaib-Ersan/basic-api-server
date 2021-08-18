'use strict';

const express = require('express');
const router = express.Router();

const { Clothes } = require('../models/index.model.js');

router.post('/cloth', Clothes.create); // creates one cloth obj
router.get('/cloth', Clothes.getAll); // gets all clothes objs
router.get('/cloth/:id', Clothes.getOne); // gets one cloth obj
router.put('/cloth/:id', Clothes.update); // updates one cloth obj
router.delete('/cloth/:id', Clothes.delete); // deletes one cloth obj


module.exports = router;
