<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <!--src属性不能直接识别url地址的图片,需要v-bind指令-->
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="desiciption">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <!--一定要加v-if,因为seller数据的获取是异步的,刚加载时还没有获取到数据,此时seller为undefined-->
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
  export default {
    props: ['seller'],
    data:{
      classMap:[]
    },
    created(){
      this.classMap=['decrease','discount','guarantee','invoice','special']
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixin.styl"
  .header
    color #fff
    background #000
    .content-wrapper
      //上右下左
      padding 24px 12px 18px 24px
      //avatar和content两块内容之间有间距,是因为有空白字符,设置font-size为0可以消除空白字符
      font-size 0px
      .avatar
        //既希望元素具有宽度高度特性，又具有同行特性，这个时候我们可以使用inline-block
        display inline-block
        img
          border-radius 2px
      .content
        display inline-block
        font-size 14px
        margin-left 16px
        vertical-align top
        .title
          margin 2px 0px 8px 0px
          .brand
            width 30px
            height 18px
            display inline-block
            bg-image('brand')
            background-size 30px, 18px
            background-repeat no-repeat
            vertical-align top
          .name
            font-size 16px
            margin-left 6px
            font-weight bold
            line-height 18px
            height 18px
        .desiciption
          line-height 12px
        .support
          margin-top 10px
          font-size 0px
          .icon
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            display inline-block
            //&.decrese等同于 .icon.decrese   子样式
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size 10px
            line-height 12px
            vertical-align top
</style>
