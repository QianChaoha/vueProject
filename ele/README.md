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
## 12. 右侧滑动时,左侧menu会根据右侧的信息进行滚动
   ### 12.1 在data中添加两个变量listHeight和scrollY
   ### 12.2 在methods中添加方法_initScroll和_calculateHeight
       _initScroll方法作用是监听foodWrapper的滚动事件,并把滚动时的偏移赋值给scrollY
       _calculateHeight方法作用是获取foodWrapper下的所有行(li标签),然后将所有行的高度都push到listHeight数组中,
   ### 12.3 在computed中添加方法currentIndex
       因为在12.1和12.2中listHeight和scrollY都已经有值了,在currentIndex方法中判断,当前滑动的scrollY落在数组listHeight的
       哪个区间内,返回那个区间的index
   ### 12.4 给menuWrapper添加绑定样式
       样式绑定在menuWrapper某一行(menuWrapper下的li标签),:class="{'current':currentIndex===index}"。根据computed下的
       currentIndex方法返回值和当前的index是否相等,相等的话添加current样式
   ### 12.5 最后添加current样式
## 13. 左侧点击时,右侧会根据左侧点击的条目滚动到相应位置
       给左侧menuWrapper每一行一行(menuWrapper下的li标签)绑定点击事件@click="selectMenu(index,$event)"
       根据index从foodWrapper下的所有行(li标签)找到应该在顶部的行,最后执行滚动到该行(el)的代码
       this.foodScroll.scrollToElement(el, 300);
## 14. 子控件的display为inline-block时,都会有间隙问题.
       解决办法:将父控件的font-size设为0
## 15. relative, absolute, fixed 的区别
       relative：生成相对定位的元素，相对于其正常位置进行定位。元素的位置通过left、right、top、button属性进行规定，
                 可以通过z-index进行层次分级。元素元素仍保持其未定位前的形状，原本所占的空间仍将保留。如果没有定位偏移量，对元素本身没有任何影响
       absolute：生成绝对定位元素。使元素脱离文档流，并相对于其包含块进行定位，包含块可能是文档中的另一个元素或者是初始包含块，
                 元素原先在正常文档流中所占的空间会会被后面元素占据；元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框；
                 绝对定位元素的包含块由离它最近的 'position' 属性为 'absolute'、'relative' 或者 'fixed' 的祖先元素创建。只要父级元素设置了
                 position并且不是static（默认既是static），那么设定了absolute的子元素即以此为包含块（最近的）。如果都没有定义，那么就相对于
                 整个文档body定位（注意不是相对于浏览器窗口定位）相对定位一般都是配合绝对定位元素使用
       fixed：生成绝对定位元素，相对于浏览器窗口的定位。通常配合z-index一起来使用。比如说网页上悬挂的聊天图标或者广告就是用了fixed
## 16. box-sizing border-box
       box-sizing:border-box; 是CSS3新增属性.固定了盒子的尺寸，无论怎么调整边距都不会改变盒子的大小,控件的宽高跟Android端一样。
       否则常一个块级元素实际所占宽(高)度=外边距（margin）+ 边界宽度(border-width) + 内边距（padding）+  宽度（width）(高度（height）)
## 17. vue的组件的props属性支持驼峰命名,不支持连接线命名,使用连接线进行赋值或者数据绑定
## 18. margin:0 auto和text-align:center区别
       margin:0 auto;是使自身在浏览器内居中，需要配合宽度使用：
       text-align:center;是使标签的内容居中,设置块级元素内文本的水平对齐方式
## 19. 字符串和变量拼接
       `${this.minPrice}起送`;//  ${变量}
## 20. 如果在实例创建之后添加新的属性到实例上，它不会触发视图更新
       解决办法:Vue.set(this.food, 'count', 1);//给food添加count属性
       这样food.count的值变化时,<div>{{food.count}}</div>显示在页面上就会变化
