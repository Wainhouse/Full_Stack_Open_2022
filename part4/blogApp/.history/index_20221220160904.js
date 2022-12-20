const app = require('./app');

const http = require('http');

const server = http.createServer(app);


server.listen(() => {
  console.log('Server is running');
});
