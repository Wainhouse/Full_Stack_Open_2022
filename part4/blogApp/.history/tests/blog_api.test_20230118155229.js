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


test('a valid blog can be added ', async () => {
  const newBlogPost = {
    _id: '8jd856uj4845ufe6di457rjd',
    title: 'Go Considered Harmful',
    author: ' W. Wainhouse',
    url: 'http://www.u.arizona.edu',
    likes: 200,
    __v: 0,
  };

  await api
    .post('/api/blogs')
    .send(newBlogPost)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogsAtEnd = await helper.blogInDb();
  expect(blogsAtEnd).toHaveLength(helper.listOfBlogs.length + 1);
});

test('a specific note can be viewed', async () => {
  const blogAtStart = await helper.blogInDb();

  const blogToView = blogAtStart[blogAtStart.length - 1];
  console.log(blogToView._id)
  const resultNote = await api
    .get(`/api/notes/${blogToView._id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const processedBlogToView = JSON.parse(JSON.stringify(blogToView));

  expect(resultNote.body).toEqual(processedBlogToView);
});

afterAll(() => {
  mongoose.connection.close();
});
