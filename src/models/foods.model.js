'use strict';

const Foods = (sequelize, DataTypes) => sequelize.define('Foods', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodDescription: {
        type: DataTypes.STRING,
    },
});

module.exports = Foods;