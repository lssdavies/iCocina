const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");

/*router.get("/", (req, res) => {
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
    res.render("recipe", {recipes})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err) 
  })
})*/

router.get('/:cuisine/:difficulty', (req, res) => {
  Recipe.findAll ({
    include: {
      model: Category,
      where: {
        category_type: {
          [Op.eq]: req.params.cuisine
        }
      }
    },
//}).then (dbRecipeData => res.render('recipe', {recipes: dbRecipeData}))
  }).then(dbRecipeData => {
  const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }))
  //res.render("homepage", { recipes, loggedIn: req.session.loggedIn })
  res.render("recipe", {recipes})
})
.catch(err => {
  console.log(err)
  res.status(500).json(err) 
})
})


module.exports = router;