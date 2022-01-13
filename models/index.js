// import all models
const Category = require('./Category');
const Comment = require('./Comment');
const Difficulty = require ('./Difficulty');
const Recipe = require('./Recipe');
const User = require('./User');

// RECIPE vs USER
User.hasMany(Recipe, {
    foreignKey: 'user-id'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

// RECIPE vs DIFFICULTY
Recipe.belongsTo(Difficulty, {
    foreignKey: 'difficulty_id'
});

Difficulty.hasMany(Recipe, {
    foreignKey: 'difficulty_id'
});

// RECIPE vs CATEGORY
Recipe.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Recipe, {
    foreignKey: 'category_id'
})

// COMMENT vs USER
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// COMMENT vs RECIPE
Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id'
});


module.exports = { Category, Comment, Difficulty, Recipe, User };
