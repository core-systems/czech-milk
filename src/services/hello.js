//require('dotenv').config()

import dotenv from 'dotenv'
dotenv.config()
console.log('process.env', process.env)

const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const result = {
  msg: 'Hello, World',
  env: process.env,
}

exports.handler = function(event, context, callback) {
  //const {identity, user} = context.clientContext
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({
      context,
      result,
    }),
  })
}
