<template>
  <div>
    {{msg}}
    {{$store.state.count}}
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
    store

  }
</script>

