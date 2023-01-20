const blogRouter = require('express').Router();
const Blog = require('../models/blog');
//const mongoose = require('mongoose');


blogRouter.get('/', (request, response) => {
  console.log('Get started');  
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post('/', (request, response, next) => {
  const body = request.body;
  if (!body.title || !body.url) {
    response.status(400).json({ error: 'Missing properties' })
    return
  }
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blog
    .save()
    .then((savedBlog) => {
      response.status(201).json(savedBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogRouter;
