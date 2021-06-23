module.exports = {
    pwa: {
      name: 'TO DO LIST',
      themeColor: '#000000',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }