const { getUsers } = require('../services/usersRepository');

module.exports = async (event) => {
  try {
    const user = await getUsers();

    return {
      status: 200,
      body: user
    };
  } catch (error) {
    return {
      status: 500,
      body: error
    };
  }
};