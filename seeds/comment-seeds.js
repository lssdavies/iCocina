const { Comment } = require('../models');

const dbCommentData = [
  {
    comment_text: 'I am trying this recipe tonight, more to come!',
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: 'My family loves this dish.',
    user_id: 2,
    recipe_id: 1
  },
  {
    comment_text: 'mmm, this was great! i substituted fresh basil and italian parsley for the thyme and oregano.',
    user_id: 3,
    recipe_id: 3
  },
  {
    comment_text: "I've tried MANY curry recipes and they don't even come close! This one nails the true curry flavors and consistency. My family loves it, I make it all the time.",
    user_id: 4,
    recipe_id: 7
  }
];

const seedComment = () => Comment.bulkCreate(dbCommentData);

module.exports = seedComment;
