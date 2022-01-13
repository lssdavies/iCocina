const { User } = require('../models');

const dbUserData = [
  {
    username: 'kamaya',
    first_name: 'Kimberly',
    last_name: 'Amaya',
    email: 'kim@email.com',    
    password: 'kamayapass'
  },
  {
    username: 'ldavies',
    first_name: 'Larry',
    last_name: 'Davies',
    email: 'larry@email.com',    
    password: 'ldaviespass'  
  },
  {
    username: 'klam',
    first_name: 'Khanh',
    last_name: 'Lam',
    email: 'khanh@email.com',    
    password: 'klampass'
  },
  {
    username: 'mjwair',
    first_name: 'Mohammad',
    last_name: 'Jwair',
    email: 'mohammad@email.com',    
    password: 'mjwairpass'
  }
];

const seedUser = () => User.bulkCreate(dbUserData);

module.exports = seedUser;
