
// const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const bodyParser = require('body-parser')

const mongoUrl = 'mongodb+srv://wainhouse:Khartoum%2121@cluster0.hralzxg.mongodb.net/blogApp?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('connected to MongoDB');
  })
  
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
      mongoose.connection.close()
    })
})

const PORT = 3005
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
