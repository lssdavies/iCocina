const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const commentRoutes = require('./comment-routes');
const difficultyRoutes = require('./difficulty-routes');
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');

router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/difficulties', difficultyRoutes);
router.use('/recipes', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;