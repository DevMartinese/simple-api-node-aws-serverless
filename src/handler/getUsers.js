const GetUsersDomain = require("../domain/getUsers");

module.exports.handler = async (event) => {
  return GetUsersDomain(event);
};