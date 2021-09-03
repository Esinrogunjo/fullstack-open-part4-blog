const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let total = 0;
  blogs.forEach((blog) => {
    total += Number(blog.likes);
  });
  return total;
};

const favoriteBlog = (blogs) => {
  return blogs.sort((a, b) => b.likes - a.likes);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
