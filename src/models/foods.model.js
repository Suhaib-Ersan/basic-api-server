'use strict';

console.log('sequelize >>>>>>>>>>>>>> ',sequelize);

const Foods = (sequelize, DataTypes) => sequelize.define('foods', {
    foodName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foodDescription: {
        type: DataTypes.STRING,
    },
});

module.exports = Foods;