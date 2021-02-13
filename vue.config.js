module.exports = {
  // publicPath: "/textbook/",
  publicPath: process.env.NODE_ENV === 'production' ?
    '/app-movie-theate/':
    '/'

};
