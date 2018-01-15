<template>
  <div class="left-nav">
  <ul v-for="(item,index) in classList" class="left-nav-ul">
      <li class="item">
        <i class="icon iconfont"  :class="item"></i>
        <div>{{contentList[index]}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        classList:['icon-wodezichan','icon-dianpu','icon-hanbao','icon-huiyuanqia','icon-shijian','icon-tongji'],
        contentList:['收银','店铺','商品','会员','抢购','统计']
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .left-nav
    color:#fff;
    font-size:10px;
    height:100%;
    background-color: #1D8ce0;
    float:left;
    width:5%;
    .left-nav-ul
      padding:0px;
      margin: 0px;
      .item
        list-style: none
        text-align: center
        border-bottom:1px solid #20a0ff
        padding:10px
        .iconfont
          font-size:24px
</style>
