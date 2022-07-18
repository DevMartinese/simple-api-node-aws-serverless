const AddUserDomain = require("../domain/addUser");

module.exports.handler = async (event) => {
  return AddUserDomain(event);
};