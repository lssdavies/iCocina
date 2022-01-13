const { Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection'); 

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        instruction: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            isNumeric: true,
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'category',
                key: 'id' 
            }
        },   
        user_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user',
                key: 'id' 
            }
        },
        difficulty_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'difficulty',
                key: 'id' 
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
        // comment_id: {
        //     type: DataTypes.INTEGER,
        //     references: { 
        //         model: 'comment',
        //         key: 'id' 
        //     }
        // }
    },
    
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;