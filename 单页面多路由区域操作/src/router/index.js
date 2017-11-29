import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import ParamPage from '@/components/ParamPage'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:"history",
  /*所有的router都会显示在App.vue中的router-view标签里面*/
  routes: [
    {
      path: '/',
      name: '传递的参数',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2
      }
    },
    {
      path: '/Hi',
      components: {
        default:HelloWorld,
        left:Hi2,
        right:Hi1
      },
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:ParamPage,
    },
    {
      path:'/goback',
      redirect:'/'
    },{
      //表示在浏览器上输入什么地址
      path:'/gobackparams/:newsId/:newsTitle',
      // redirect表示重定向到哪里
      redirect:'/params/:newsId/:newsTitle'
    },
    {
      path:'*',
      component:Error
    }
  ]
})
