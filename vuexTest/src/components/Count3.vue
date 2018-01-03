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
    //第三种方法
//    通过mapState的数组来赋值
//  computed:mapState(["count"])
//  这个算是最简单的写法了，在实际项目开发当中也经常这样使用。
    computed: mapState(['count']),
    store

  }
</script>

