module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://console.jumpcloud.com',
        changeOrigin: true,
        headers: {'x-api-key': process.env.APIKEY}
      },
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
