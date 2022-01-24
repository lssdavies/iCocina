const { Category } = require('../models');

const dbCategoryData = [
  {
    category_type: 'Mexican Cuisine'
  },
  {
    category_type: 'Chinese Cuisine'
  },
  {
    category_type: 'Italian Cuisine'
  },
  {
    category_type: 'Indian Cuisine'
  },
  {
    category_type: 'Desserts'
  }
];

const seedCategory = () => Category.bulkCreate(dbCategoryData);

module.exports = seedCategory;
