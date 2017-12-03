1.引用全局的stylus时,报错This relative module was not found:
解决办法:
npm install stylus-loader css-loader style-loader --save-dev
2.style-loader: Adds some css to the DOM by adding a <style> tag
解决办法:
在下面添上
include: [
/src/,
。。。。
]
可以了
include:是代表我们解析的文件只包含那些东西
include: [] 这里用一个数组来包括的要解析的文件夹路径
{
      test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader',include: []
}
3.expected "indent", got "."
因为第二行的.border-1px报错
解决办法:
expected "indent", got "." 在写stylus时碰到这种问题，肯定是由于编辑器使用了不一样的缩进方式，
需要进行设置即可。因为他在你的编辑器中可能是对齐了的，但是实际并没有
.border-1px加几个空格就好了
3.配置mock,视频中在dev-server.js中配置，项目中在webpack.dev.conf.js中配置
首先
// nodejs开发框架express，用来简化操作
const express = require('express')
// 创建node.js的express开发框架的实例
const app = express()
// 引用的json地址
var appData = require('../data.json')
// json某一个key
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;
var apiRoutes = express.Router();
app.use('/api', apiRoutes);
然后找到devServer,添加
  before(app) {
    app.get('/api/seller', (req, res) => {
      res.json({
        // 这里是你的json内容
        errno: 0,
        data: seller
      })
    }),
    app.get('/api/goods', (req, res) => {
      res.json({
        // 这里是你的json内容
        errno: 0,
        data: goods
      })
    }),
    app.get('/api/ratings', (req, res) => {
      res.json({
        // 这里是你的json内容
        errno: 0,
        data: ratings
      })
    })
  }
再访问本地数据就可以了
4.使用vue-resource之前要安装vue-resource，然后在index.js中执行
Vue.use(VueResource)
执行之后才可以使用
5.在main.js中加载的公共样式index.styl,这样App.vue里面就可以直接使用加载进来的公共样式

