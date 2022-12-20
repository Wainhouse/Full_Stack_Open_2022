const app = require('./app');
const PORT = require('./app');

const http = require('http');

const server = http.createServer(app);


server.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
