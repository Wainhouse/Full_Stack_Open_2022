const dummy = (blogs) => {
  console.log(blogs);
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.max((n = 0, blog) => n + blog.likes, 0);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
