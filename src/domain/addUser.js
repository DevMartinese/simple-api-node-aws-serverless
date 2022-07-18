const { addUser } = require('../services/usersRepository');
const { v4 } = require('uuid');

module.exports = async (event) => {
  try {
    const { name, email, password } = JSON.parse(event.body);

    const newUser = {
      id: v4(),
      name,
      email,
      password,
      createdAt: new Date()
    };

    await addUser(newUser);

    return {
      status: 200,
      body: JSON.stringify(newUser)
    };
  } catch (error) {
    return {
      status: 500,
      body: 'ERROR'
    };
  }
};