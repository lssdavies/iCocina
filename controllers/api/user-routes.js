const router = require('express').Router();
const { User, Recipe, Comment } = require('../../models');
const withAuth = require("../../utils/auth");

// GET all users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single user
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Recipe,
        attributes: ['title']
      },
      {
        model: Comment,
        attributes: ['comment_text'],
        include: {
          model: Recipe,
          attributes: ['title']
        }
      }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a user
// js sql INSERT INTO users
//   (username, first_name, last-name, email, password)
//   VALUES
//     ("greatestcook", "Hector", "Sun", "hsun@gmail.com", "password1234");
router.post('/', (req, res) => {
  // expects {username: 'greatestcook', first_name: 'hector', last_name: 'sun', email: 'hsun@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id
      req.session.username = dbUserData.username
      req.session.loggedIn = true

      res.json(dbUserData)
    })
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this is for LOGIN
router.post('/login', (req, res) => {
  // expects {email: 'hsun@gmail.com', password: 'password1234'}
  console.log("no-email")
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// log out route
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end()
    });
  }
  else {
    res.status(404).end()
  }
})

// UPDATE users
// SET username: 'greatestcook', first_name: 'hector', last_name: 'sun', email: 'hsun@gmail.com', password: 'password1234'
// WHERE id = 1;
router.put('/:id', withAuth, (req, res) => {
    // expects {username: 'greatestcook', first_name: 'selena', last_name: 'sun', email: 'hsun123@gmail.com', password: 'password5678'}
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// DELETE /api/users/1
router.delete('/:id', withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
