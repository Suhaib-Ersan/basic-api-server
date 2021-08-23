"use strict";

const express = require("express");
const router = express.Router();

const { Foods } = require("../models/index.model.js");

router.post("/foods", createOneFood); // creates one food obj
router.get("/foods", getAllFood); // gets all food objs
router.get("/foods/:id", getOneFood); // gets one food obj
router.put("/foods/:id", updateOneFood); // updates one food obj
router.delete("/foods/:id", deleteOneFood); // deletes one food obj

async function createOneFood(req, res) {
  let food = await Foods.create(req.body);
  res.status(201).json(food);
}
async function getAllFood(req, res) {
  let allFood = await Foods.getAll();
  res.status(200).send(allFood);
}
async function getOneFood(req, res) {
  let id = parseInt(req.params.id);
  let food = await Foods.getOne(id);
  res.status(200).json(food);
}
async function updateOneFood(req, res) {
  let id = parseInt(req.params.id);
  let newFoodInfo = req.body;
  let food = await Foods.update(id, newFoodInfo);
  res.status(200).json(food);
}
async function deleteOneFood(req, res) {
  let id = parseInt(req.params.id);
  let food = await Foods.delete(id);
  res.status(204).json(food);
}

module.exports = router;
