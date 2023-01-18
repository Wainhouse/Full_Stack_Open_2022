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

  const contents = response.body.map((r) => r.content);
  console.log(contents)  
  expect(contents).toBeDefined();
});

afterAll(() => {
  mongoose.connection.close();
});
