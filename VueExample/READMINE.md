1.本地开发常常需要搭建临时的服务，现在只要使用live-server就能实现这三个插件的所有功能，而且很简单就能启动一个
看起来很专业的本地服务。你只需要全局安装
live-server：npm install -g live-server
安装完毕后,在项目根目录执行
live-server
命令，然后你什么也不用做，等待一会浏览器就自动打开，并且当你修改本地任何文件，
浏览器都会立即同步。一般会把它放在package.json的scripts下的server中，然后执行npm run server：
  "scripts": {
    "server": "live-server ./ --port=8080"
  }
2.v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
  v-else:和v-if相对应
  v-show：调整css dispaly属性，可以使客户端操作更加流畅。
3.v-for
4.我们已经用的是{{xxx}},这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，
会暴露我们的{{xxx}}。Vue给我们提供的v-text,就是解决这个问题的
如果在javascript中写有html标签，用v-text是输出不出来的，这时候我们就需要用v-html标签了，
需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。所以只能在可信的
内容上使用v-html，永远不要在用户提交和可操作的网页上使用。
5.v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码，比如绑定点击事件
<button v-on:click="addScore">加分</button>
也可以写成
<button @:click="addScore">加分</button>
绑定键盘按下回车的事件
<input type="text" v-on:keyup.enter="onEnter" v-model="scoreEnter"/>
因为回车的键盘码是13，所以也可以写成
<input type="text" v-on:keyup.13="onEnter" v-model="scoreEnter"/>
6.v-model可用于双向数据绑定
7.v-bind是处理HTML中的标签属性的
8.v-pre原样输出
v-cloak在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用
v-once指令在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程
9.directive
10.extend


14.组件注册的是一个标签，而指令注册的是已有标签里的一个属性。在实际开发中我们还是用组件比较多，
指令用的比较少。因为指令看起来封装的没那么好