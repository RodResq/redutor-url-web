const proxy = [
  {
    context: '/encurtador',
    target: 'http://localhost:8080/encurtador',
    security: false,
    pathRewrite: {'^/server-api' : ''}
  }
];
module.exports = proxy;
