const blogRouter = require('express').Router();
const Blog = require('../models/blog');
//const mongoose = require('mongoose');

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body);
  const savedBlog = await blog.save();
  response.status(201).json(savedBlog.toJSON());
});

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

blogRouter.put('/:id', async (request, response) => {
  const likes = request.body;
  const id = request.params.id;

  const updatedBlog = await Blog.findByIdAndUpdate(id, likes, { new: true });

  updatedBlog
    ? response.status(200).json(updatedBlog.toJSON())
    : response.status(404).end();
});
module.exports = blogRouter;
