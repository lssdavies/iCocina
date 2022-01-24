const { Difficulty } = require('../models');

const dbDifficultyData = [
  {
    difficulty_level: 'Basic'
    // easy
  },
  {
    difficulty_level: 'Moderate'
  },
  {
    difficulty_level: 'Advanced'
    // hard
  }
];

const seedDifficulty = () => Difficulty.bulkCreate(dbDifficultyData);

module.exports = seedDifficulty;
