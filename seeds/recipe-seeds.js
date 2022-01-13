const { Recipe } = require("../models");

const dbRecipeData = [
  {
    title: "Spaghetti Carbonara",
    ingredient: "4 slices of bacon \n 4 cloves of garlic, minced \n 2 tbsp Parsley, fresh leaves, chopped \n 2 large eggs \n 8oz spaghetti \n kosher salt and black pepper \n 1/2 cup parmesan \n 2 tbs of water",       
    instruction: "1. In a large pot, cook the spaghetti according to the instructions on the package \n 2. In a large sauce pan, cook the slices of bacon \n 3. Add minced garlic \n 4. Saute for about 1 minute \n 5. In a bowl, combine eggs and parmesan, mix well \n 6. Add the 8 oz of cooked spaghetti, a pinch of salt and pepper, the egg and cheese mixture. 7. Stir well \n 8. Add 2 tbs of water and continue to stir \n 9. Top with a pinch of salt, pepper and parsley",
    calories: 574,
    category_id: 3,
    user_id: 1, 
    difficulty_id: 2,
    // does comment_id need to be in this table.
    //comment_id:
    image: "/images/spaghetti-carbonara.png"
  }
];

const seedRecipe = () => Recipe.bulkCreate(dbRecipeData);

module.exports = seedRecipe;
