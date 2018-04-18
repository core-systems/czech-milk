require('dotenv').config()

console.log('process.env', process.env)

exports.handler = function(event, context, callback) {
    const result = {
      msg: "Hello, World",
      env: process.env,
    }
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(result),
    })
}
