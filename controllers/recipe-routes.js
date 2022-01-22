const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
  console.log(req.session);
  console.log('getting recipes');
  Recipe.findAll({
    attributes: ["id", "title", "ingredient", "instruction", "calories", "category_id", "user_id", "difficulty_id", "image", "created_at"
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "recipe_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"]
        }
      },
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbRecipeData => {
    const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }))
    //res.render("homepage", { recipes, loggedIn: req.session.loggedIn })
    res.render("recipe", {recipes})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err) 
  })
})

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