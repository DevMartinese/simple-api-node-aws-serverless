const UpdateUserDomain = require("../domain/updateUser");

module.exports.handler = async (event) => {
  return UpdateUserDomain(event);
};