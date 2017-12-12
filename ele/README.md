# 仿饿了吗手机前端页面,基于vue2.0编写
## 1.引用全局的stylus时,报错This relative module was not found:
    解决办法:
    npm install stylus-loader css-loader style-loader --save-dev
## 2.style-loader: Adds some css to the DOM by adding a <style> tag
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
## 3.expected "indent", got "."
    因为第二行的.border-1px报错
    解决办法:
    expected "indent", got "." 在写stylus时碰到这种问题，肯定是由于编辑器使用了不一样的缩进方式，
    需要进行设置即可。因为他在你的编辑器中可能是对齐了的，但是实际并没有
    .border-1px加几个空格就好了
## 4.配置mock,视频中在dev-server.js中配置，项目中在webpack.dev.conf.js中配置
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
## 5.使用vue-resource之前要安装vue-resource，然后在index.js中执行
    Vue.use(VueResource)
    执行之后才可以使用
## 6.在main.js中加载的公共样式index.styl,这样App.vue里面就可以直接使用加载进来的公共样式
## 7.水平居中
  ### 7.1 margin和width实现水平居中
    父元素有明确的宽度,配合margin的左右值为“auto”实现效果
  ### 7.2 inline-block实现水平居中方法
    父容器中设置text-align的属性为“center”,子元素设置display : inline-block
  ### 7.3 浮动实现水平居中的方法 https://www.w3cplus.com/css/elements-horizontally-center-with-css.html
## 8.垂直居中
  ### 8.1 单行文本
    只需为它们添加等值的 padding-top 和 padding-bottom 就可以实现垂直居中
  ### 8.2 多行文本
    同样可以使用等值 padding-top 和 padding-bottom 的方式实现垂直居中。如果你在使用过程中发现这种方法没见效，
    那么你可以通过 CSS 为文本设置一个类似 table-cell 的父级容器，然后使用 vertical-align 属性实现垂直居中
  ### 8.3 flex布局
## 9.better-scroll
  ### 9.1 在package.json中添加依赖
     "better-scroll": "^1.5.5"
     然后运行npm stall
  ### 9.2 添加ref
    ref="menuWrapper"
    ref="foodWrapper"
  ### 9.3 添加初始化逻辑
       methods:{
            _initScroll:function () {
               this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
                       this.foodScroll = new BScroll(this.$refs.foodWrapper, {});
            }
       },
  ### 9.4 获取数据后调用初始化方法
     this.$http.get('/api/goods').then((response)=> {
            response = response.body;
            if (response.errno === 0) {
              this.goods = response.data;
              this._initScroll();
            }
     });
## 10. &.class
    .menu-item
          //垂直居中
          display table
          ...
          &.current
     会同时对指定标签加载menu-item和current样式
     });
## 11. v-show和v-if的区别官网已经说过
      1. v-if 是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
      2. v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
      一般来说， v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。
