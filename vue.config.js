module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        proxy: {
          // proxy all requests starting with /api to jsonplaceholder
          '/api': {
            target: 'https://ezpayapplication.herokuapp.com/api',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
};