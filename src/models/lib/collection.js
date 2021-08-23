"use strict";

class Collection {
  constructor(model) {
    // the model should be a valid sequelize model
    this.model = model;
  }
  // needs req.body
  async create(modelInfo) {
    let model = await this.model.create(modelInfo);
    return model;
  }
  
  async getAll() {
    let allModels = await this.model.findAll();
    return allModels;
  }
  // needs req.params.id
  async getOne(id) {
    let model = await this.model.findOne({ where: { id } });
    return model;
  }
  
  
  async update(id,newModelInfo) {
    let model = await this.model.findOne({ where: { id } });
    let updateModel = await model.update(newModelInfo);
    return updateModel;
  }
  
  async delete(id) {
    let deleteModel = await this.model.destroy({ where: { id } });
    return deleteModel;
  }
  
}

module.exports = Collection;