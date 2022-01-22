const router = require('express').Router();
const { Recipe, Category, Difficulty, User, Comment } = require('../../models');
const { Op } = require("sequelize");

// FIND all recipes
router.get('/', (req, res) => {
  Recipe.findAll (
    {
      include: [
        {
            model: Category,
            attributes: ['category_type']
        },
        {
            model: Difficulty,
            attributes: ['difficulty_level']
        },
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['comment_text']
        }
      ]
    }
  )
  .then(dbRecipeData => res.json(dbRecipeData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// get one recipe
router.get('/:id', (req, res) => {
  Recipe.findOne ({
    where: { 
      id: req.params.id 
    },
    include: [
        {
            model: Category,
            attributes: ['category_type']
        },
        {
            model: Difficulty,
            attributes: ['difficulty_level']
        },
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['comment_text']
        }
      ]
  })
  .then (dbRecipeData => res.json(dbRecipeData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// getting recipe by params
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
    raw:true
//}).then (dbRecipeData => res.render('recipe', {recipes: dbRecipeData}))
//}).then (dbRecipeData => res.json(dbRecipeData))
  }).then(dbRecipeData => {
    const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }))
    //res.render("homepage", { recipes, loggedIn: req.session.loggedIn })
    res.render("recipe", {recipes})
  })
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

// create new recipe
router.post('/', (req, res) => {
    /* req.body should look like this...
    {
      title: "Fried Chicken",
      ingredient: "chicken, sauce A, oil, onion, etc.",
      instruction: "1. Prepare, 2. Cook, 3. Display, 4. etc.",
      Calories: 1000,
      Category_id: "able to select from dropdown",
      user_id: "auto selection as user loggin in",
      Difficulty_id: "able to select from dropdown"
    }
    */
    Recipe.create ({
        title: req.body.title,
        ingredient: req.body.ingredient,
        instruction: req.body.instruction,
        calories: req.body.calories,
        category_id: req.body.category_id,
        user_id: req.body.user_id,
        difficulty_id: req.body.difficulty_id,
        image: req.body.image
    })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update a recipe
router.put('/:id', (req, res) => {
  Recipe.update(
    {
        title: req.body.title,
        ingredient: req.body.ingredient,
        instruction: req.body.instruction,
        calories: req.body.calories,
        category_id: req.body.category_id,
        user_id: req.body.user_id,
        difficulty_id: req.body.difficulty_id,
        image: req.body.image
    },
    {
        where: {
        id: req.params.id
        }
    }
    )
    .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No Recipe found with this id' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Delete a recipe
router.delete('/:id', (req, res) => {
  Recipe.destroy ({
    where: {
      id: req.params.id
    }
  })
  .then(dbRecipeData => {
    if (!dbRecipeData) {
      res.status(404).json({ message: 'NO Recipe found with this ID!' });
      return;
    }
    res.json(dbRecipeData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
