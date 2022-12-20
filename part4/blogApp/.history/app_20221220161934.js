// const http = require('http')
require('dotenv').config();
const express = require('express');
const blogRouter = require('./controllers/blogs');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const bodyParser = require('body-parser');

const mongoUrl =
  'mongodb+srv://wainhouse:Khartoum%2121@cluster0.hralzxg.mongodb.net/blogApp?retryWrites=true&w=majority';
mongoose.connect(mongoUrl);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('connected to MongoDB');
  })

  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/blogs', blogRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = {
  PORT,
};

module.exports = app;
