module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        proxy: {
          // proxy all requests starting with /api to jsonplaceholder
          '/api': {
            target: 'http://localhost:5000/api',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
};