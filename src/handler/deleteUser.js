const DeleteUserDomain = require("../domain/deleteUser");

module.exports.handler = async (event) => {
  return DeleteUserDomain(event);
};