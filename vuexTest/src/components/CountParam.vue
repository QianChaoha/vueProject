<template>
  <div>
    {{msg}}
    <!-- 默认写法$store.state.count,现在不使用默认写法,直接调用count-->
    {{count}}
    <p>
      <!--固定写法 .commit('方法名',方法中的参数)-->
      <button @click="$store.commit('addParam',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
    <p>
      <!--简单写法,只需在methods中配置mapMutations即可-->
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../vuex/store'
  import {mapState, mapMutations} from 'vuex'
  export default{
    data(){
      return {msg: 'vuex'}
    },
    //第三种方法
    computed: mapState(['count']),
    methods: mapMutations(['add', 'reduce', 'addParam']),
    store

  }
</script>

