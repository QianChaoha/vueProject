<template>
  <div class="lint-title"><!--使用flex实现自适应功能-->
    <!--经测试,此处用span标签在某些手机上显示有问题,所以用div-->
    <div class="line"></div>
    <div class="text">{{this.text}}</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['text']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "line_title.styl"
</style>
