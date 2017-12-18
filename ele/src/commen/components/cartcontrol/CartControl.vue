<template>
  <div class="cart-control">
    <!--只有选择的商品大于0,‘减少’按钮才会显示出来-->
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}
    </div>
    <!--foodWrapper的better-scroll要加click: true,否则的话,子控件接收不到点击事件-->
    <div class="cart-add" @click="addCart($event)">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default{
    data(){
      return {}
    },
    //添加或者减少,操作的都是一个商品,所以要传入一个food
    props: ['food'],
    methods: {
      //添加商品数量
      addCart: function (event) {
        if (!event._constructed) {
          //浏览器没有event._constructed属性,所以检测到是浏览器的话,屏蔽掉一次点击事件
          //这样做是因为在PC端点击时候selectMenu方法会被回调2次(虽然我没有测试到该问题)
          return;
        }
        if (!this.food.count) {
          //this.food.count不存在,是第一次点击
//          this.food.count = 1;
          //如果在实例创建之后添加新的属性到实例上，它不会触发视图更新
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCart: function (event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "cart-control.styl"
</style>
