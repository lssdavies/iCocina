const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Recipe.findAll({
    where: {
      user_id: req.session.user_id
    },
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
    
    res.render("dashboard", {recipes, loggedIn: true})
    //res.render("dashboard", {recipes})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

module.exports = router;