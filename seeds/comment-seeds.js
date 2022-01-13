const { Comment } = require('../models');

const dbCommentData = [
  {
    comment_text: 'I am trying this recipe tonight, more to come!',
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: 'My family loves this recipe.',
    user_id: 2,
    recipe_id: 1
  }
];

const seedComment = () => Comment.bulkCreate(dbCommentData);

module.exports = seedComment;
