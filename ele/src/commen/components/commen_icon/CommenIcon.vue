<template>
    <span v-show="type>0" class="icon" :class="classMap[type]">
    </span>
</template>

<script type="text/ecmascript-6">
  export default{
    props: ['type'],
    data(){
      return {
        classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "commen_icon.styl"
</style>
