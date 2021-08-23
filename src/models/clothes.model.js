'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
    clothesColor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ClothesBrand: {
        type: DataTypes.STRING,
    },
});

module.exports = Clothes;