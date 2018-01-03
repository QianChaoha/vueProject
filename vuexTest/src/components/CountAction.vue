<template>
  <div>
    {{msg}}
    <!-- 默认写法$store.state.count,现在不使用默认写法,直接调用count-->
    {{count}}
    <p>
      <!--默认写法"$store.commit('add')  简单写法,只需在methods中配置mapMutations即可-->
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </p>

    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '../vuex/store'
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return {msg: 'vuex'}
    },
    //第三种方法
    computed: {
      ...mapState(['count']),
    },
    methods: {
      ...mapMutations(['add', 'reduce', 'addParam']),
      ...mapActions(['addAction', 'reduceAction']),
    },
    store

  }
</script>

