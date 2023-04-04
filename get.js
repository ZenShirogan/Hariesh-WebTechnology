const http = require('http');
const url = require('url');
const querystring = require('querystring');

function onRequest(request, response) {
  const path = url.parse(request.url).pathname;
  console.log('Request for ' + path + ' received.');
  const query = url.parse(request.url).query;
  console.log(query);
  const username = querystring.parse(query)["username"];
  const email = querystring.parse(query)["email"];
  const password = querystring.parse(query)["password"];
  response.write("Hello " + username);
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log('Server has started');
