const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
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
    res.render("homepage", {recipes, loggedIn: req.session.loggedIn })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("homepage");
});


router.get("/recipe/:id", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
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
      // console.log(dbRecipeData)
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      // Array.forEach((data, i) => {
      //   return data
      // })
      // .mao
      // .filter
      const recipes = dbRecipeData.get({ plain: true });
      //const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }))
      console.log("!!!!!!!!!!!!!!!")
      console.log(recipes.image)
      console.log("!!!!!!!!!!!!!!!")

      res.render("single-recipe", { recipes, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;