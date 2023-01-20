const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

const Blog = require('../models/blog');
const helper = require('./test_helper');

beforeEach(async () => {
  await Blog.deleteMany({});

  const blogObjects = helper.listOfBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('verifies that the unique identifier', async () => {
  const response = await api.get('/api/blogs');
  response.body.forEach((blog) => {
    expect(blog.id).toBeDefined();
  });
});

test('a blog can be added ', async () => {
  const newBlogPost = {
    title: 'Go Considered Harmful',
    author: ' W. Wainhouse',
    url: 'http://www.u.arizona.edu',
    likes: 200,
  };

  await api
    .post('/api/blogs')
    .send(newBlogPost)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogInDb();
  expect(blogsAtEnd).toHaveLength(helper.listOfBlogs.length + 1);
});

test('a specific blog can be viewed', async () => {
  const newBlogPost = {
    title: 'specific blog',
    author: ' W. Wainhouse',
    url: 'http://www.u.specificblog.edu',
    likes: 3,
  };

  await api
    .post('/api/blogs')
    .send(newBlogPost)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogInDb();
  const specificBlog = blogsAtEnd.find((blog) => blog.title === 'specific' && blog.author === ' W. Wainhouse');
  const response = await api.get('/api/blogs');
  expect (response[response.length - 1]).toEqual(specificBlog);
});

test('verifies that blog likes are set to zero if not provided', async () => {
  const newBlogPost = {
    title: 'This little piggy went to the market',
    author: ' W. Wainhouse',
    url: 'http://www.u.bigbadwolf.edu',
  };

  await api
    .post('/api/blogs')
    .send(newBlogPost)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogInDb();
  const lastBlog = blogsAtEnd[blogsAtEnd.length -1]
  expect(blogsAtEnd).toHaveLength(helper.listOfBlogs.length + 1);
  expect(lastBlog.likes).toBe(0);
});

test('a valid blog can be added ', async () => {
  const newBlogPost = {
    author: ' W. Wainhouse',
    likes: 200,
  };

  await api
    .post('/api/blogs')
    .send(newBlogPost)
    .expect(400)
    .expect('Content-Type', /application\/json/);
    
  const blogsAtEnd = await helper.blogInDb();
  expect(blogsAtEnd).toHaveLength(helper.listOfBlogs.length);
});

afterAll(() => {
  mongoose.connection.close();
});
