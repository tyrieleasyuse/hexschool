module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "第七周作業(後台管理)";
        return args;
      })
  }
}