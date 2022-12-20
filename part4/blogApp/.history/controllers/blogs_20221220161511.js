const blogRouter = require('express').Router();
const Blog = require('../models/blog');
const mongoose = require('mongoose');


blogRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post('/api/blogs', (request, response, next) => {
  console.log('Post started');  
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((savedNote) => {
      response.json(savedNote);
      mongoose.connection.close();
    })
    .catch((error) => next(error));
});

module.exports = blogRouter;
