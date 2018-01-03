<template>
  <div>
    {{msg}}
    <!-- 默认写法$store.state.count,现在不使用默认写法,直接调用count-->
    {{count}}
    <p>
      <!--固定写法 .commit('方法名')-->
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../vuex/store'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {msg: 'vuex'}
    },
    //第二种方法,引入mapState
    //在computed计算属性里写如下代码：
    computed: mapState({
      count: state=>state.count
    }),
    store

  }
</script>

