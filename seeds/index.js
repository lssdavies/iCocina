const sequelize = require("../config/connection")
const seedUser = require("./user-seeds")
const seedRecipe = require("./recipe-seeds")
const seedCategory = require("./category-seeds")
const seedComment = require("./comment-seeds")
const seedDifficulty = require("./difficulty-seeds")

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedUser()
  await seedRecipe()
  await seedCategory()
  await seedComment()
  await seedDifficulty()

  process.exit(0)
};

seedAll();  