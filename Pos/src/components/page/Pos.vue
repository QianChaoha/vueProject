<template>
  <div class="pos">
    <LeftNav></LeftNav>
    <el-row class="main">
      <el-col :span="7" class="pos-order" id="order">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="点餐" name="first">
            <el-table
              :data="tableData"
              border style="width: 100%">
              <el-table-column
                prop="goodsName"
                label="商品名称"
              >
              </el-table-column>
              <el-table-column
                prop="count"
                label="数量"
                width="65"
              >
              </el-table-column>
              <el-table-column
                prop="price"
                label="金额"
                width="65">
              </el-table-column>
              <el-table-column
                label="操作"
                width="120"
                inline-template
              >
                <template>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">添加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="外卖" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">

        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul v-for="(item,index) in oftenGoods">
              <li class="often-goods-list-li">
                <span>{{item.goodsName}}</span>
                <span class="o-price">{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">

          <el-tabs v-model="goodType" @tab-click="handleTypeGood">
            <el-tab-pane label="汉堡">
              <ul class='cookList'>

                <li class="cook-list-li" v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <span class="foodImg">
                      <img :src="goods.goodsImg" class="image">
                  </span>
                  <div class="content">
                    <div class="foodName">{{goods.goodsName}}</div>
                    <div class="foodPrice">￥{{goods.price}}元</div>
                  </div>
                </li>

              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class='cookList'>

                <li class="cook-list-li" v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <span class="foodImg">
                      <img :src="goods.goodsImg" class="image">
                  </span>
                  <div class="content">
                    <div class="foodName">{{goods.goodsName}}</div>
                    <div class="foodPrice">￥{{goods.price}}元</div>
                  </div>
                </li>

              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class='cookList'>

                <li class="cook-list-li" v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <span class="foodImg">
                      <img :src="goods.goodsImg" class="image">
                  </span>
                  <div class="content">
                    <div class="foodName">{{goods.goodsName}}</div>
                    <div class="foodPrice">￥{{goods.price}}元</div>
                  </div>
                </li>

              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class='cookList'>

                <li class="cook-list-li" v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <span class="foodImg">
                      <img :src="goods.goodsImg" class="image">
                  </span>
                  <div class="content">
                    <div class="foodName">{{goods.goodsName}}</div>
                    <div class="foodPrice">￥{{goods.price}}元</div>
                  </div>
                </li>

              </ul>
            </el-tab-pane>

          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script type="text/ecmascript-6">
  import LeftNav from '../commen/LeftNav.vue'
  import axios from 'axios'

  export default {
    components: {
      LeftNav
    },
    data() {
      return {
        goodType: 'first',
        activeName: 'first',

        tableData: [
          {

            goodsName: '可口可乐',
            price: 8,
            count: 1
          }, {

            goodsName: '香辣鸡腿堡',
            price: 15,
            count: 1
          }, {

            goodsName: '爱心薯条',
            price: 8,
            count: 1
          }, {

            goodsName: '甜筒',
            price: 8,
            count: 1
          }],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTypeGood(tab, event){
      }
    },
    mounted: function () {
      let totalHeight = document.body.clientHeight;
      document.getElementById('order').style.height = totalHeight + 'px';
    },
    created: function () {
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response=> {
          this.oftenGoods = response.data;
        })
        .catch(error=> {
          alert('网络错误，不能访问');
        })
      //读取分类商品列表
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response=> {
          console.log(response);
          //this.oftenGoods=response.data;
          this.type0Goods = response.data[0];
          this.type1Goods = response.data[1];
          this.type2Goods = response.data[2];
          this.type3Goods = response.data[3];

        })
        .catch(error=> {
          console.log(error);
          alert('网络错误，不能访问');
        })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pos
    width 100%
    height 100%
    .main
      width 95%
      height 100%
      float left
      .pos-order
        background-color #fff
        border-right solid #0000ff 1px
        text-align center
        .div-btn
          margin-top 15px
      .title
        height 20px
        border-bottom 1px solid #d3dce6
        padding 10px
      .often-goods-list
        .often-goods-list-li
          list-style none
          border 1px solid #e5e9f2
          margin 10px
          padding 10px
          background-color #fff
          float left
          .o-price
            color #0000ff
      .goods-type
        clear: both
        .cook-list-li
          list-style: none
          display flex
          float left
          background-color #ffffff
          margin 2px
          padding 2px
          border 1px solid #C0CCDA
          .foodImg
            flex 0 0 57px
            width 57px
            height 57px
            margin-right 10px
            .image
              width 57px
              height 57px
              background-size 57px, 57px
              background-repeat no-repeat
          .content
            flex 1
            .foodName
              margin-top 5px
            .foodPrice
              margin-top 5px
  //height 100%
</style>
