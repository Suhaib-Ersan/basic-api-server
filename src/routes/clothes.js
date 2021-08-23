'use strict';

const express = require('express');
const router = express.Router();

const { Clothes } = require('../models/index.model.js');

router.post('/clothes', createOneCloth); // creates one cloth obj
router.get('/clothes', getAllCloth); // gets all clothes objs
router.get('/clothes/:id', getOneCloth); // gets one cloth obj
router.put('/clothes/:id', updateOneCloth); // updates one cloth obj
router.delete('/clothes/:id', deleteOneCloth); // deletes one cloth obj

async function createOneCloth(req, res) {
  let Cloth = await Clothes.create(req.body);
  res.status(201).json(Cloth);
}
async function getAllCloth(req, res) {
  let allCloth = await Clothes.getAll();
  res.status(200).send(allCloth);
}
async function getOneCloth(req, res) {
  let id = parseInt(req.params.id);
  let Cloth = await Clothes.getOne(id);
  res.status(200).json(Cloth);
}
async function updateOneCloth(req, res) {
  let id = parseInt(req.params.id);
  let newClothInfo = req.body;
  let Cloth = await Clothes.update(id, newClothInfo);
  res.status(200).json(Cloth);
}
async function deleteOneCloth(req, res) {
  let id = parseInt(req.params.id);
  let Cloth = await Clothes.delete(id);
  res.status(204).json(Cloth);
}



module.exports = router;
