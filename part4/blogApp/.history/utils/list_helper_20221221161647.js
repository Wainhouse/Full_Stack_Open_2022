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
    : blogs.reduce((prevNum, currNum) => prevNum.likes <= currNum.likes ? prevNum : currNum);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
