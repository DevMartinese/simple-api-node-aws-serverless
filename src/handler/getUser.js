const GetUserDomain = require("../domain/getUser");

module.exports.handler = async (event) => {
  return GetUserDomain(event);
};