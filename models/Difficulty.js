const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Difficulty extends Model {}

Difficulty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    difficulty_level: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'difficulty'
  }
);

module.exports = Difficulty;
