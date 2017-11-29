<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link class="router-link"to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="router-link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="router-link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/Header.vue'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  .tab-item {
    flex: 1;
    text-align: center;

  }
  .router-link{
    /*display: block是为了优化点击事件，让点击在文字旁边的空白处也能有点击的效果*/
    display: block;
  }
</style>
