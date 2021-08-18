'use strict';

const express = require('express');
const router = express.Router();

const {
  createCloth,
  getAllCloth,
  getOneCloth,
  updateCloth,
  deleteCloth,
} = require('../../business/routes-implantation.js');

router.post('/cloth', createCloth);
router.get('/cloth', getAllCloth);
router.get('/cloth/:id', getOneCloth);
router.put('/cloth/:id', updateCloth);
router.delete('/cloth/:id', deleteCloth);


module.exports = router;