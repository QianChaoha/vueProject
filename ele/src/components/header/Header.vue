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
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="bulletin-right-arrow"></i>
    </div>
    <img :src="seller.avatar" class="head-bg">
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
    background rgba(7,17,27,0.5)
    position relative
    .content-wrapper
      //上右下左
      padding 24px 12px 18px 24px
      //avatar和content两块内容之间有间距,是因为有空白字符,设置font-size为0可以消除空白字符
      font-size 0px
      position relative
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
      .support-count
        position absolute
        right 12px
        bottom 18px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        text-align center
        background-color rgba(0,0,0,0.2)
        .count
          font-size 10px
    .bulletin-wrapper
      height 28px
      line-height 28px
      background rgba(7,17,27,0.2)
      padding 0px 22px 0 12px
      //文本不进行换行
      white-space nowrap
      //文本超出父元素的部分隐藏掉
      overflow hidden
      //当文本溢出包含元素时发生的事情
      //clip	修剪文本。	测试
      //ellipsis	显示省略符号来代表被修剪的文本。	测试
      //string	使用给定的字符串来代表被修剪的文本
      text-overflow ellipsis
      //消除子元素的空白间隙,但是font-size设为0px后超出的文本省略号没有了
      //也可以使两个span紧挨着,能实现一样的效果
      //font-size 0px
      .bulletin-title
        display inline-block
        //设置控件的宽高
        width 22px
        height 12px
        bg-image('bulletin')
        //设置背景图片的大小
        background-size 22px 12px
        background-repeat no-repeat
        vertical-align top
        //由于bulletin-wrapper设置了line-height为28px,bulletin-text继承了父控件的line-height属性
        //文本会占据28px的高度,但由于font-size为10px,那么文本距离上下都会有7px的高度
        margin-top 7px
      .bulletin-text
        font-size 10px
        margin 0 4px
        vertical-align top
    .head-bg
      position absolute
      left 0px
      top 0px
      width 100%
      height 100%
      //设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面
      //设置为-1,此元素堆叠在后面
      z-index -1
      //滤镜效果
      //blur(px)	给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊
      filter blur(10px)
</style>
