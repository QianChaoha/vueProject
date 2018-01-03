import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/Count'
import Count1 from '@/components/Count1'
import Count2 from '@/components/Count2'
import Count3 from '@/components/Count3'
import CountParam from '@/components/CountParam'
import CountGetter from '@/components/CountGetter'
import CountAction from '@/components/CountAction'

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
      path: '/count',
      component: Count
    },
    {
      path: '/count1',
      component: Count1
    },
    {
      path: '/count2',
      component: Count2
    },
    {
      path: '/count3',
      component: Count3
    },
    {
      path: '/CountGetter',
      component: CountGetter
    },
    {
      path: '/CountAction',
      component: CountAction
    },
  ]
})
