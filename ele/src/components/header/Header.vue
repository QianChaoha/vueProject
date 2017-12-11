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
      <div v-if="seller.supports" class="support-count" @click="showDetail">
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
    <transition name ="fade">
      <div  class="detail" v-show="detailShow" >
        <!--Sticky footer布局-->

        <!--这层的作用是设置最小高度为屏幕的高度-->
        <div class="detail-wrapper clearfix">
          <!--这层是内容层-->
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <v-star :size="48" :score="seller.score" class="star"></v-star>
            <v-line-title text="优惠信息"></v-line-title>
            <ul v-if="seller.supports" class="supports">
              <li v-for="(item,index) in seller.supports" class="support-item">
                <span class="icon" :class="classMap[item.type]"></span>
                <!-- classMap[seller.supports[0].type-->
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <v-line-title text="商家公告"></v-line-title>
            <div class="bulletin">
              <div class="content">{{seller.bulletin}}</div>
            </div>

          </div>
        </div>
        <!--这层设置关闭的按钮-->
        <div class="detail-close" @click="hideClick">
          <i class="icon-close"></i>
        </div>
      </div >
    </transition>

  </div>
</template>

<script type="text/ecmascript-6">
  import LineTitle from '../../commen/components/line_title/LineTitle.vue'
  import star from '../star/star.vue'

  export default {
    props: ['seller'],
    data(){
      return {
        classMap: [],
        detailShow: false
      }
    },
    methods: {
      showDetail: function () {
        this.detailShow = true;
      },
      hideClick:function () {
        this.detailShow = false;
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
    },
    components: {
      'v-star': star,
      'v-line-title': LineTitle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "./header.styl"

</style>
