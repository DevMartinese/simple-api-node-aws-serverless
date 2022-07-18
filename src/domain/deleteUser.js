const { deleteUser } = require('../services/usersRepository');

module.exports = async (event) => {
  try {
    const { id } = event.pathParameters;

    await deleteUser(id);

    return {
      status: 200,
      message: 'Successfully deleted user'
    }
  } catch (error) {
    return {
      status: 500,
      message: 'Error deleting user'
    }
  }
};