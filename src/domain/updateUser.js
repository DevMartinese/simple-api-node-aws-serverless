const { updateUser } = require('../services/usersRepository');

module.exports = async (event) => {
  try {
    const { id } = event.pathParameters;
    const { password } = JSON.parse(event.body);

    const userUpdated = await updateUser(id, password);

    return {
      status: 200,
      body: JSON.stringify(userUpdated),
      message: 'User updated successfully'
    }
  } catch (error) {
    return {
      status: 500,
      body: 'ERROR'
    }
  }
};