const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Login successful!');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});