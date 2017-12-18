<template>
  <div class="goods">
    <!--左侧menu栏的宽度为定值,右侧内容层填充剩下的区域,使用flex布局-->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <!--绑定了一个对象,currentIndex===index为true时,加载current class-->
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)">
          <span class="text border-1px">
            <v-commen-icon :type="item.type"></v-commen-icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list food-list-hook">
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
                  <!--挨在一起,间距才对-->
                  <span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <!--0,null,""转化为boolean类型都是false-->
                  <span class="now">{{food.price}}</span><span class="old"
                                                               v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <v-cartcontrol :food="food"></v-cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--将配送费和起送费传递进去-->
    <v-shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></v-shopcart>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommenIcon from '../../commen/components/commen_icon/CommenIcon.vue'
  import BScroll from 'better-scroll'
  import ShopCart from '../shopcart/ShopCart.vue'
  import CartControl from '../../commen/components/cartcontrol/CartControl.vue'
  export default {
    props: ['seller'],
    data(){
      return {
        goods: {},
        classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
        listHeight: [],
        scrollY: 0
      }
    },
    //computed 计算属性只有在相关的数据发生变化时才会改变要计算的属性，当相关数据没有变化是，它会读取缓存
    computed: {
      currentIndex(){
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];//当前的高度
          let height2 = this.listHeight[i + 1];//下一个高度
          //滚动到底部的时候,height2为undefined
          //undefined转为bool类型为false
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            //落到height1和height2之间的区间了
            return i;
          }
        }
        return 0;
      }
    },
    created: function () {
      this.$http.get('/api/goods').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.goods = response.data;
          //对DOM一系列的js操作都要在DOM 更新循环结束之后，可以在Vue.nextTick()函数中操作DOM
          //nextTick 在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法,获取更新后的 DOM
          this.$nextTick(()=> {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    },
    methods: {
      _initScroll: function () {
        //{click: true},是否将click事件传递,默认被拦截了
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {click: true});
        //probaType: 3 表示实时派发scroll事件
        //不加click: true的话,子控件接收不到点击事件
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {click: true, probeType: 3});
        //监听scroll事件，在第二个参数function中返回
        this.foodScroll.on('scroll', (pos)=> {
          this.scrollY = Math.abs(Math.round(pos.y));//将小数转化为正整数
        })
      },
      _calculateHeight: function () {
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          height += foodList[i].clientHeight;
          this.listHeight.push(height);
        }
      },
      //左侧Menu的点击事件
      selectMenu: function (index, event) {
        if (!event._constructed) {
          //浏览器没有event._constructed属性,所以检测到是浏览器的话,屏蔽掉一次点击事件
          //这样做是因为在PC端点击时候selectMenu方法会被回调2次(虽然我没有测试到该问题)
          return;
        }
        let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        //类似jump to的功能,通过这个方法,跳转到指定的dom
        //在_initScroll方法中,有添加成员变量foodScroll
        this.foodScroll.scrollToElement(el, 300);//滚动的动作花费300毫秒
      }
    },
    components: {
      'v-commen-icon': CommenIcon,
      'v-shopcart': ShopCart,
      'v-cartcontrol': CartControl
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "./goods.styl"

</style>
