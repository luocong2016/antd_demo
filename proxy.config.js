/**
 * Created by Lutz on 2017/9/17 0017.
 */

module.exports = {
  '/api': {
    target: 'http://jsonplaceholder.typicode.com/',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
};
