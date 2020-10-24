const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {  //`api`是需要转发的请求 
      target: 'http://localhost:8088/',  // 这里是接口服务器地址
      pathRewrite: {
        '^/api': '',
      },
      secure: false, // 是否验证证书
      changeOrigin: true
    })
  )
}