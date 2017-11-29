1.在App.vue中增加几个router-view标签，用name属性进行区分
2.在index.js中配置路由,案例中设置了首页的components
与上一节(vuecliTest)不同的是,默认页面HelloWorld和Hi页面平级,Hi1是Hi的子页面,
此节从上往下有三个router-view标签，默认HelloWorld填充第一个标签,Hi1和Hi2填充第二个和第三个

还配置了一个路由，功能是输入http://localhost:8080/#/Hi  时Hi1和Hi2调换位置


:冒号的形式传递参数
1.在配置文件里以冒号的形式设置参数。我们在/src/router/index.js文件里配置路由。
 path:'/params/:newsId/:newsTitle',
 路由配置文件里制定了这两个值newsId和newsTitle。
2.使用,增加一个跳转的router-link,同时将newsId和newsTitle值带进去(不带的话跳转后页面没内容)
 <router-link to="/params/21/haha">ParamPage</router-link>
 3.vue-router如何参数传递
   3.1用name传递参数,接收参数:<p>{{ $route.name}}</p>
   3.2使用<router-link> 标签中的to传参(注意是:to,要加冒号)
   <router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
   其中:name：就是我们在路由配置文件中起的name值(示例实在index.js)。
        params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值
   使用:{{$route.params.username}}
   3.3接收参数
    <h1>{{ $route.params.newsId }}</h1>
    <h1>{{ $route.params.newsTitle }}</h1>

   注意:可以加入正则需要在路由配置文件里（/src/router/index.js）以圆括号的形式加入,这样对传递的参数做限制。
      path:'/params/:newsId(\\d+)/:newsTitle',
4.重定向
只要在路由配置文件中（/src/router/index.js）把原来的component换成redirect参数就可以了。我们来看一个简单的配置。
export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },{
      path:'/goback',
      redirect:'/'
    }

  ]
})
这样输入http://localhost:8080/goback 时会重定向到首页
重定向时也可以传递参数，使用方式跟使用url传递参数方式类似，配置
{
      //表示在浏览器上输入什么地址
      path:'/gobackparams/:newsId/:newsTitle',
      // redirect表示重定向到哪里
      redirect:'/params/:newsId/:newsTitle'
}
然后在浏览器中输入
http://localhost:8080/#/gobackparams/21/news
就会重定向到http://localhost:8080/#/params/21/news
5.alias别名
在路由配置文件里（/src/router/index.js），
{
    path: '/hi1',
    component: Hi1,
    alias:'/jspang'
 }
然后在浏览器中输入
http://localhost:8080/#/jspang
就会跳到Hi1页面
redirect和alias的区别

redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。
填个小坑：

别名请不要用在path为’/’中，如下代码的别名是不起作用的。

{
  path: '/',
  component: Hello,
  alias:'/home'
}
6.路由的过渡动画
  6.1想让路由有过渡动画，需要在<router-view>标签的外部添加<transition>标签，标签还需要一个name属性。
     <transition name="fade">
       <router-view ></router-view>
     </transition>
     我们在/src/App.vue文件里添加了<transition>标签，并给标签起了一个名字叫fade。
  6.2 css过渡类名：
     组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：
     fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
     fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
     fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
     fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
     从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。
     那我们就在App.vue页面里加入四种CSS样式效果，并利用CSS3的transition属性控制动画的具体效果。代码如下：
     .fade-enter {
       opacity:0;
     }
     .fade-leave{
       opacity:1;
     }
     .fade-enter-active{
       transition:opacity .5s;
     }
     .fade-leave-active{
       opacity:0;
       transition:opacity .5s;
     }
  6.3上边的代码设置了改变透明度的动画过渡效果，但是默认的mode模式in-out模式，这并不是我们想要的。下面我们学一下mode模式。

     过渡模式mode：

     in-out:新元素先进入过渡，完成之后当前元素过渡离开。
     out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入
7.mode的设置和404页面的处理
  7.1mode的两个值(在index.js中设置)
histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/ 也好看！
hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。

export default new Router({
  mode:"history",
  routes:......
  7.2 404页面的设置：
     用户会经常输错页面，当用户输错页面时，我们希望给他一个友好的提示，为此美工都会设计一个漂亮的页面，这个页面就是我们常说的404页面。vue-router也为我们提供了这样的机制.
     7.2.1.设置我们的路由配置文件（/src/router/index.js）：
     {
        path:'*',
        component:Error
     }
     这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。
     7.2.2.新建404页面：
     在/src/components/文件夹下新建一个Error.vue的文件。简单输入一些有关错误页面的内容。
     <template>
         <div>
             <h2>{{ msg }}</h2>
         </div>
     </template>
     <script>
     export default {
       data () {
         return {
           msg: 'Error:404'
         }
       }
     }
     </script>
     7.2.3.我们在用<router-link>瞎写一个标签的路径。
      <router-link to="/bbbbbb">我是瞎写的</router-link> |
     预览一下我们现在的结果，就已经实现404页面的效果。
8.路由中的钩子
我们知道一个组件从进入到销毁有很多的钩子函数，同样在路由中也设置了钩子函数。路由的钩子选项可以写在路由配置文件中，
也可以写在我们的组件模板中。我们这节课就介绍这两种钩子函数的写法。路由配置文件中的钩子函数
我们可以直接在路由配置文件（/src/router/index.js）中写钩子函数。但是在路由文件中我们只能写一个beforeEnter,
就是在进入此路由配置时。先来看一段具体的代码：

{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
我们在params路由里配置了bdforeEnter得钩子函数，函数我们采用了ES6的箭头函数，需要传递三个参数。我们并在箭头函数中打印了to和from函数。具体打印内容可以在控制台查看object。

三个参数：

to:路由将要跳转的路径信息，信息是包含在对像里边的。
from:路径跳转前的路径信息，也是一个对象的形式。
next:路由的控制参数，常用的有next(true)和next(false)。(可以使用next动态来决定是否要跳到哪个页面)
写在模板中的钩子函数

在配置文件中的钩子函数，只有一个钩子-beforeEnter，如果我们写在模板中就可以有两个钩子函数可以使用：

beforeRouteEnter：在路由进入前的钩子函数。
beforeRouteLeave：在路由离开前的钩子函数。

export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>
这是我们写在params.vue模板里的路由钩子函数。它可以监控到路由的进入和路由的离开，也可以轻易的读出to和from的值
9.编程式导航
使用this.$router.go(-1),进行后退操作,回退到上一页
router.go(1):代表着前进，用法和后退一样
this.$router.push('/xxx ')这个编程式导航都作用就是跳转,跳转到具体的页面
