<template>
  <div class="goods">
    <!--左侧menu栏的宽度为定值,右侧内容层填充剩下的区域,使用flex布局-->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item">
          <span class="text border-1px">
            <v-commen-icon :type="item.type"></v-commen-icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food,index) in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" class="image">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">{{food.price}}</span>
                  <!--0,null,""转化为boolean类型都是false-->
                  <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommenIcon from '../../commen/components/commen_icon/CommenIcon.vue'
  import BScroll from 'better-scroll'
  export default {
    props: ['seller'],
    data(){
      return {
        goods: {},
        classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      }
    },
    created: function () {
      this.$http.get('/api/goods').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.goods = response.data;
          //对DOM一系列的js操作都要放进Vue.nextTick()的回调函数中
          this.$nextTick(()=> {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll: function () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {});
      }
    },
    components: {
      'v-commen-icon': CommenIcon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "./goods.styl"

</style>
