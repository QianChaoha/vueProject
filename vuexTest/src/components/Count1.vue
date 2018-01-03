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
  export default{
    data(){
      return {msg: 'vuex'}
    },
    computed: {
      //第一种方法
      //在computed里添加count方法
      count(){
        return this.$store.state.count;
      }
    },
    store

  }
</script>

