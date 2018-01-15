import Vue from 'vue';
import Router from 'vue-router';
import Pos from '@/components/page/Pos';
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos,
    }
  ]
})
