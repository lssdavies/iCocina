const router = require('express').Router();
const { Comment, Recipe } = require('../../models');

// GET all comments
router.get('/', (req, res) => {
  Comment.findAll (
    {
      include: [
        {
          model: Recipe,
          attributes: ['title']
        }
      ]
    }
  )
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a comment
// find one category by its `id` value
router.get('/:id', (req, res) => {
  Comment.findOne ({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Recipe,
        attributes: ['title']
      }
    ],
  })
  .then ((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'NO comment found with this id!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// POST a commnent
// expects => {comment_text: "This is the comment", user_id: 1, recipe_id: 2}
router.post('/', (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {  
  Comment.update (
    {
      comment_text: req.body.comment_text,
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then (dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'NO comment found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a comment by id
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
