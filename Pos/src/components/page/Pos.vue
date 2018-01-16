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
            <el-tab-pane label="汉堡" name="first">
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

        tableData: [],
        oftenGoods: [],
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: [],
        totalMoney: 0, //订单总价格
        totalCount: 0  //订单商品总数量
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTypeGood(tab, event){
      },
      addOrderList(goods){
        this.totalCount=0; //汇总数量清0
        this.totalMoney=0;
        let isHave=false;
        //判断是否这个商品已经存在于订单列表
        for (let i=0; i<this.tableData.length;i++){
          console.log(this.tableData[i].goodsId);
          if(this.tableData[i].goodsId==goods.goodsId){
            isHave=true; //存在
          }
        }
        //根据isHave的值判断订单列表中是否已经有此商品
        if(isHave){
          //存在就进行数量添加
          let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
          arr[0].count++;
          //console.log(arr);
        }else{
          //不存在就推入数组
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
          this.tableData.push(newGoods);
        }

        //进行数量和价格的汇总计算
        this.tableData.forEach((element) => {
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.price*element.count);
        });

      }
    },
    mounted: function () {
      let totalHeight = document.body.clientHeight;
      document.getElementById('order').style.height = totalHeight + 'px';
    },
    created: function () {
      axios.get('/api/oftenGoods')
        .then(response=> {
          this.oftenGoods = response.data.data;
        })
        .catch(error=> {
          alert('网络错误，不能访问');
        })
      //读取分类商品列表
      axios.get('/api/typeGoods')
        .then(response=> {
          console.log(response);
          //this.oftenGoods=response.data;
          this.type0Goods = response.data.data[0];
          this.type1Goods = response.data.data[1];
          this.type2Goods = response.data.data[2];
          this.type3Goods = response.data.data[3];

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
