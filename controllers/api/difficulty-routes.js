const router = require('express').Router();
const { Difficulty, Recipe } = require('../../models');

// GET all difficulty level
router.get('/', (req, res) => {
  Difficulty.findAll (
    {
      include: {
        model: Recipe,
        attributes: ['title']
      }
    }
  )
  .then(dbDiffData => res.json(dbDiffData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET a single difficulty level
router.get('/:id', (req, res) => {
  Difficulty.findOne({
    where: { 
      id: req.params.id
    },
    include: {
      model: Recipe,
      attributes: ['title']
    }
  })
  .then(dbDiffData => {
    if (!dbDiffData) {
      res.status(404).json({ message: 'NO difficulty level found with this id!' });
      return;
    }
    res.json(dbDiffData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new difficulty level
router.post('/', (req, res) => {
  Difficulty.create ({
    difficulty_level: req.body.difficulty_level
  })
  .then(dbDiffData => res.json(dbDiffData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Update a difficulty level
router.put('/:id', (req, res) => {
  Difficulty.update (
    { 
      difficulty_level: req.body.difficulty_level 
    },
    {
      where: { 
        id: req.params.id 
      }
    }
  )
  .then (dbDiffData => {
    if (!dbDiffData) {
      res.status(404).json({ message: 'NO difficulty level found with this id!' });
      return;
    }
    res.json(dbDiffData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete on difficulty by its `id` value
router.delete('/:id', (req, res) => {  
  Difficulty.destroy ({
    where: { 
      id: req.params.id 
    }
  })
  .then(dbDiffData => {
    if (!dbDiffData) {
      res.status(404).json({ message: 'NO difficulty level found with this id!!' });
      return;
    }
    res.json(dbDiffData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
