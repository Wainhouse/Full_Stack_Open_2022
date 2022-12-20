const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(app.PORT, () => {
  console.log(`Server running on port ${app.PORT}`);
});
