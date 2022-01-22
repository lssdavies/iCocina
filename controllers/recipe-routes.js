const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const { Op } = require("sequelize");

// getting recipe by params
router.get('/:cuisine/:difficulty', (req, res) => {
  Recipe.findAll ({
    where: { 
      category_id: req.params.cuisine,
      difficulty_id: req.params.difficulty
    },
  })
  .then (dbRecipeData => {
    if (!dbRecipeData) {
      res.status(404).json({ message: "No recipe found with the selected category and difficulty level" });
      return;
    }

    const recipes = dbRecipeData.get({ plain: true });

    res.render("recipe", { recipes });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  });



module.exports = router;