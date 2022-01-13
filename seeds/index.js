const sequelize = require("../config/connection")
const seedUser = require("./user-seeds")
const seedCategory = require("./category-seeds")
const seedDifficulty = require("./difficulty-seeds")
const seedRecipe = require("./recipe-seeds")
const seedComment = require("./comment-seeds")

const seedAll = async () => {
  await sequelize.sync({ force: true })

  await seedUser()
  await seedCategory()
  await seedDifficulty()
  await seedRecipe()
  await seedComment()

  process.exit(0)
};

seedAll();  