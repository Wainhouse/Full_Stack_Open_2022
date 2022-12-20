const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(app.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
