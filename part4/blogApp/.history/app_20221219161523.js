const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const blogRouter = require('./controllers/blogs')
const logger = require('./utils/logger');
const config = require('./utils/config');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });


const mongoUrl = 'mongodb://localhost/bloglist';
mongoose.connect(mongoUrl);
console.log(http);

app.use(cors());
app.use(express.json());
app.use('/bloglist', blogRouter)

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
