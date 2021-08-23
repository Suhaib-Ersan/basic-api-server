'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/foods';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://suhaib@localhost:5432/class03-04";
const { Sequelize, DataTypes } = require('sequelize');
var sequelize = new Sequelize(POSTGRES_URI, {});


const foods = require('./foods.model.js');
const clothes = require('./clothes.model.js');

const Collection = require('./lib/collection.js');

const foodsModel = foods(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

// customerModel.hasMany(orderModel, { sourceKey: 'id', foreignKey: 'customerId' });
// orderModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id' });

const foodsCollection = new Collection(foodsModel);
const clothesCollection = new Collection(clothesModel);


module.exports = {
    db: sequelize,
    Foods: foodsCollection,
    Clothes: clothesCollection
}