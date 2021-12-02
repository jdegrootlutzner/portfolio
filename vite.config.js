// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pentridge: resolve(__dirname, 'pentridge-station/index.html'),
        privacy: resolve(__dirname, 'digital-privacy/index.html'),
        honeybis: resolve(__dirname, 'honeybis/index.html'),
        redial: resolve(__dirname, 'redial/index.html'),
        citibikes: resolve(__dirname, 'citbikes/index.html'),
        chiphoagie: resolve(__dirname, 'chiphoagie/index.html'),
        chinook: resolve(__dirname, 'chinook-fund/index.html'),
        tables: resolve(__dirname, 'bedside-tables/index.html'),
        redial: resolve(__dirname, 'redial/index.html'),
        cloud: resolve(__dirname, 'cloud-under-the-sea/index.html'),


      }
    }
  }
})

