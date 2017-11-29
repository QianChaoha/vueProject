# vuelitest

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
1.全局安装
npm install vue-cli -g
2.vue init <template-name> <project-name>
  init：表示我要用vue-cli来初始化项目

  <template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，

  webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。

  webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。

  browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。

  browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。

  simple-一个最简单的单页应用模板。

  <project-name>：标识项目名称，这个你可以根据自己的项目来起名字。

  在实际开发中，一般我们都会使用webpack这个模板，那我们这里也安装这个模板，在命令行输入以下命令：
  vue init webpack vuecliTest
3.cd vuecliTest  进入我们的vue项目目录。

  npm install  安装我们的项目依赖包，也就是安装package.json里的包，如果你网速不好，你也可以使用cnpm来安装。

  npm run dev (执行package.json中scripts中dev那行指令)开发模式下运行我们的程序。
  给我们自动构建了开发用的服务器环境和在浏览器中打开，并实时监视我们的代码更改，
  即时呈现给我们。自己开发使用dev,发布使用build


======================================router============================
2.子路由(在Hi页面添加两个子路由)
  2.1 Hi的模版中添加 <router-view></router-view>标签，子路由将会被放在此标签内
  2.2 创建Hi1和Hi2子页面
  2.3 在index.js的Hi路由下面添加children属性，配置两个子页面,并且import进来
