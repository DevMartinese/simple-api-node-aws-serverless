const { getUser } = require('../services/usersRepository');

module.exports = async (event) => {
  try {
    const { id } = event.pathParameters;

    const user = await getUser(id);

    return {
      status: 200,
      body: user
    };
  }
  catch (error) {
    return {
      status: 500,
      body: 'ERROR'
    };
  }
};