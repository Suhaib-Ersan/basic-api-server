'use strict';

const express = require('express');
const router = express.Router();

const {
  createFood,
  getAllFood,
  getOneFood,
  updateFood,
  deleteFood,
} = require('../../business/routes-implantation.js');

router.post('/food', createFood);
router.get('/food', getAllFood);
router.get('/food/:id', getOneFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


module.exports = router;