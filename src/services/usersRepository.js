const { DynamoDB } = require('aws-sdk');
const dynamoDb = new DynamoDB.DocumentClient();

async function addUser(newUser) {
  const params = {
    TableName: 'UsersTable',
    Item: newUser
  };

  await dynamoDb.put(
    params
  ).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newUser)
  };
};

async function getUser(id) {
  const params = {
    TableName: 'UsersTable',
    Key: {
      id
    }
  };

  const result = await dynamoDb.get(
    params
  ).promise();

  const user = result.Item;

  return user;
};

async function getUsers() {
  const params = {
    TableName: 'UsersTable'
  };

  const result = await dynamoDb.scan(
    params
  ).promise();

  const users = result.Items;

  return users;
};

async function updateUser(id, password) { 
  const params = {
    TableName: 'UsersTable',
    Key: {
      id
    },
    UpdateExpression: 'set password = :password',
    ExpressionAttributeValues: {
      ':password': password
    },
    ReturnValues: 'ALL_NEW'
  };

  const result = await dynamoDb.update(
    params
  ).promise();

  const user = result.Attributes;

  return user;
};

async function deleteUser(id) {
  const params = {
    TableName: 'UsersTable',
    Key: {
      id
    }
  };

  return await dynamoDb.delete(
    params
  ).promise();
};

module.exports = { 
  addUser, 
  getUser,
  getUsers, 
  updateUser,
  deleteUser
};