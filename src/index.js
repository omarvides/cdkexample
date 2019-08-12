module.exports.handler = function handler(event) {
  console.log(event);
  return { statusCode: 200, body: JSON.stringify('hello') };
};