import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  /*所有的router都会显示在App.vue中的router-view标签里面*/
  routes: [
    {
      path: '/',
      name: '传递的参数',
      component: HelloWorld
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children:[
    
        {
          path: 'Hi1',
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'Hi2',
          name: 'Hi2',
          component: Hi2
        }
      ]
    },
  ]
})