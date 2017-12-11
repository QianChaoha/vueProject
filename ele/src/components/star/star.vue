<template>
  <div class="star" :class="starType">
    <span v-for="item in itemClasses" :class="item" class="item-class"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default{
    props: ['size', 'score'],
    computed: {
      starType(){
        return 'star-' + this.size;
      },
      itemClasses(){
        let result = [];
        //向下取整
        let score = Math.floor(this.score * 2) / 2;
        //对1取余，判断是否有小数，如果有小数的话对1取余不会为0
        let hasDecimal = score % 1 !== 0;
        //整数部分,判断有多少个全星
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          //每个评论是由5颗星组成,凑齐5颗星
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixin.styl"

  .star
    font-size 0px
    .item-class
      display inline-block
      background-repeat no-repeat
    &.star-24//&是父级选择器
      .item-class
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          //等于.item-class.on,即<div class="item-class on"></div>
          //.qq .pp{。。。。。}中间有空格表示 选择class中包含qq的元素内子元素中class中包含pp的元素
          //.qq.pp{。。。。。}中间没有空格表示 选择class中同时包含qq和pp的元素
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
    &.star-36
      .item-class
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-48
      .item-class
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
</style>
