'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
// const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/Foods";
const { Sequelize, DataTypes } = require('sequelize');
const foods = require('./foods.model.js');

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    Foods: foods(sequelize, DataTypes),
}