"use strict";

class Collection {
  constructor(model) {
    // the model should be a valid sequelize model
    this.model = model;
  }

  async create(req, res) {
    let modelInfo = req.body;
    let model = await this.model.create(modelInfo);
    res.status(201).json(model);
  }
  
  async getAll(req, res) {
    let allModels = await this.model.findAll();
    res.status(200).send(allModels);
  }
  
  async getOne(req, res) {
    let id = parseInt(req.params.id);
    let model = await this.model.findOne({ where: { id } });
    res.status(200).json(model);
  }
  
  
  async update(req, res) {
    let id = parseInt(req.params.id);
    let newModelInfo = req.body;
    let model = await this.model.findOne({ where: { id } });
    let updateModel = await model.update(newModelInfo);
    res.status(200).json(updateModel);
  }
  
  async delete(req, res) {
    let id = parseInt(req.params.id);
    let deleteModel = await this.model.destroy({ where: { id } });
    res.status(204).json(deleteModel);
  }
  
}

module.exports = Collection;