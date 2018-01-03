/**
 * Created by cqian on 2017/12/31.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  count: 1
}
//mutations作用是改变状态
const mutations = {
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  },
  addParam(state,n){
    state.count+=n;
  },
}
//getters配置相当于vue中的computed属性,输出值之前会过滤(计算)一次
const getters={
  count:function (state) {
    return state.count+=3;
  }
}


//actions和之前讲的Mutations功能基本一样，不同点是，actions是异步的改变state状态，而Mutations是同步改变状态
const actions={
  addAction(context){
    //setTimeout(function (),3000);//延迟3秒执行
    setTimeout(function () {
      context.commit('add',10);
    },3000);
  },
  reduceAction({commit}){
    commit('reduce',10);
  }
}
export default new Vuex.Store({
  state,mutations,getters,actions
})
