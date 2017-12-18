<template>
  <div class="shopcart">
    <div class="content">
      <!--右侧区域content-right宽度固定,左侧区域content-left宽度根据屏幕宽度自适应-->
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'heightlight':totalCount>=0}">

          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'heightlight':totalPrice>=0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费:￥{{deliveryPrice}}</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    //配送费,起送价格,选择的商品(数组)
    props: ['deliveryPrice', 'minPrice', 'selectFoods'],
    computed: {
      //所有选择物品的价格
      totalPrice: function () {
        let price = 0;
//        this.selectFoods.forEach((food)=> {
//            price += food.price * price.count;
//          }
//        );
        return price;
      },
      //所有选择物品的总数
      totalCount: function () {
        let count = 0;
//        this.selectFoods.forEach((food)=> {
//            count += food.count;
//          }
//        );
        return count;
      },

      payDesc: function () {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}起送`;
        } else if (this.totalPrice < this.minPrice) {
          return `还差${this.minPrice - this.totalPrice}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass: function () {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough'
        } else {
          return 'enough'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "shopcart.styl"
</style>
