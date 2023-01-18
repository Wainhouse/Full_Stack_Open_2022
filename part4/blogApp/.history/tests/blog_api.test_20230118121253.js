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
  response.body.forEach(blog => {
    expect(blog.id).toBeDefined();
  });

//   const idContent = response.body.map((r) => r.id);
//   console.log(idContent[0])  
//   expect(idContent[0]).toBeDefined('id');
});

afterAll(() => {
  mongoose.connection.close();
});
