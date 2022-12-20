require('dotenv').config();
const express = require('express');
const blogRouter = require('./controllers/blogs');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');


const mongoUrl =
  'mongodb+srv://wainhouse:Khartoum%2121@cluster0.hralzxg.mongodb.net/blogApp?retryWrites=true&w=majority';
mongoose.connect(mongoUrl);

mongoose
  .connect(mongoUrl)
  .then(() => {
    logger.info('connected to MongoDB');
  })

  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(middleware.requestLogger);


app.use('/api/blogs', blogRouter);


module.exports = app;
