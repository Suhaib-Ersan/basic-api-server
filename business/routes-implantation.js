"use strict";

const { Foods } = require('../src/models/foods.model');

async function createFood(req, res) {
  let foodInfo = req.body;
  let food = await Foods.createFood(foodInfo);

  res.status(201).json(food);
}

async function getAllFood(req, res) {
  let allFoods = await Foods.findAll();
  res.status(200).send(allFoods);
}

async function getOneFood(req, res) {
  let id = parseInt(req.params.id);
  let food = await Foods.findOne({ where: { id } });
  res.status(201).json(food);
}


async function updateFood(req, res) {
  let id = parseInt(req.params.id);
  let newFoodInfo = req.body;
  let food = await Foods.findOne({ where: { id } });
  let updateFood = await food.update(newFoodInfo);
  res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
  let id = parseInt(req.params.id);
  let deleteFood = await Foods.destroy({ where: { id } });
  res.status(204).json(deleteFood);
}

module.exports = {
  createFood,
  getAllFood,
  getOneFood,
  updateFood,
  deleteFood,
};
