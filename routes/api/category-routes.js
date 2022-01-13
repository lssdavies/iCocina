const router = require('express').Router();
const { Category, Recipe } = require('../../models');

// find all categories
router.get('/', (req, res) => {
  Category.findAll ({
    include: {
      model: Recipe,
      attributes: ['title']
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne ({
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
      res.status(404).json({ message: 'NO category type found with this id!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// create a new category
router.post('/', (req, res) => {
  Category.create ({
    category_type: req.body.category_type
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {  
  Category.update (
    {
      category_type: req.body.category_type
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then (dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'NO category type found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {  
  Category.destroy ({
    where: { 
      id: req.params.id 
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'NO category type found with this id!' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
