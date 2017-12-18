<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link class="router-link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="router-link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="router-link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/Header.vue'
  export default {
    data(){
      return {
        seller: {}
      }
    },
    created: function () {
      this.$http.get('/api/seller').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.seller = response.data;
          console.log("seller: " + this.seller);
        }
      });
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./commen/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    line-height: 40px

    .tab-item
      flex: 1
      text-align: center
      .router-link
        /*display: block是为了优化点击事件，让点击在文字旁边的空白处也能有点击的效果*/
        display: block
        font-size: 14px
</style>
