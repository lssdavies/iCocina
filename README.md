# iCocina

![Github License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=for-the-badge)

## Description
Tired of eating the same thing everyday? Looking for a new recipe? Visit ICocina where you can search recipes based on categories and difficulty levels. Find a recipe that fits what you want for dinner, lunch or even dessert!

Our motivaion is from different backgrounds, and we love all types of food. Altogether, we want to provide a website where you can search by category and difficulty level. Therefore, we created this responsive and interactive website with the vision to view recipes, like recipes, comment on recipes and even contribute your own recipes. 

User Story
- AS a person who is looking for a new recipe
- I WANT to choose a recipe and find a list of ingredients with step-by-step instructions
- SO THAT I can make the dish

Technologies Used:
- [Node.js and Express.js to create a RESTful API](https://www.npmjs.com/package/express)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize) package to connect Express.js API to a MySQL database
- [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like MySQL username, password, and database name.
- [Handlebars.js](https://www.npmjs.com/package/handlebars), a logicless templating language that keeps the View and the code separate and compiles templates into JavaScript functions.
- [New Technology - NPM package Cloudinary](https://www.npmjs.com/package/cloudinary)
- [Deployed with Heroku](https://www.heroku.com/home)
- Structure follows MVC Paradigm


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Links](#links)

## Installation

To use this application, please follow the following steps:
- Clone the repository using SSH - 'git@github.com:kimberlyamaya/iCocina.git'
- Run npm to install the dependencies: Node.js, Express, MySQL, MySQL2, Sequelize, dotenv, Handlebars.js, and Cloudinary - 'npm install node.js express mysql mysql2 sequelize dotenv express-handlebars cloudinary'
- Create a environment variable file (.env) and put in your crendentials (DB_NAME='ecommerce_db' DB_USER='yourusername' DB_PW='yourpassword'). Make sure to include this file(.env) in your .gitignore file, so that your credentials are hidden from public.
- Create your database using MySQl Shell Command 'mysql -u username -p, enter your password'. Then run 'source db/schema.sql' to create the local database.
- Check if the database has been created successfully by entering the following in the command line - 'SHOW DATABASES;'
- Quit MySQl Shell Command - quit;
- Seed the tables data to your database so you can test your Routes using Insomnua - 'npm run seed'
- Start the server - 'npm start'
- Use of local host or Heroku to host the application

## Usage 
After the installation, please test scenarios in Insomnia, local host browser or Heroku to make sure the application works as expected.

## License

This project is using the MIT License.