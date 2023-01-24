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

describe('when there is initially some blogs saved', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all notes are returned', async () => {
    const response = await api.get('/api/notes');

    expect(response.body).toHaveLength(helper.initialNotes.length);
  });
});

describe('viewing a specific blog', () => {
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
    const specificBlog = blogsAtEnd.find(
      (blog) => blog.title === 'specific' && blog.author === ' W. Wainhouse'
    );
    const response = await api.get('/api/blogs');
    expect(response[response.length - 1]).toEqual(specificBlog);
  });

  test('a valid blog can be added ', async () => {
    const newBlogPost = {
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
});

describe('addition of a new blog', () => {
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
    const lastBlog = blogsAtEnd[blogsAtEnd.length - 1];
    expect(blogsAtEnd).toHaveLength(helper.listOfBlogs.length + 1);
    expect(lastBlog.likes).toBe(0);
  });
});

describe('deletion of a note', () => {
  test('succeeds with status code 204 if id is valid', async () => {
    const blogsAtStart = await helper.blogInDb();
    const blogToDelete = blogsAtStart[0];

    await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

    const blogsAtEnd = await helper.notesInDb();

    expect(blogsAtEnd).toHaveLength(helper.initialBlog.length - 1);

    const contents = blogsAtEnd.map((r) => r.content);

    expect(contents).not.toContain(blogsAtEnd.content);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
