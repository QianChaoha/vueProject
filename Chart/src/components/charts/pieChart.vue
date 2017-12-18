<!--饼状图-->
<template>
  <div class="c-charts">
    <IEcharts :option="pie"></IEcharts>
  </div>


</template>

<script>
  import vPageTitle from '../common/pageTitle.vue';
  import IEcharts from 'vue-echarts-v3';
  export default {
    components: {
      vPageTitle, IEcharts
    },
    data: () => ({
    //单图表类型：pie 饼状图
    pie: {
      tooltip: {
        //tooltip提示框，鼠标悬浮交互时的信息提
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"//内容格式器，鼠标悬浮时提示内容显示成什么样的格式
      },
      legend: {
        //legend 图例，每个图表最多仅有一个图例
        orient: 'vertical',//垂直显示
        x: 'right',//放置在饼状图的图例
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']//有哪些选项
      },
      series: [
        //series（通用）驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效
        //这里有series数组中有2条数据(内层的数据和外层的数据)
        {
          name: '访问来源',//tooltip下的formatter下的a显示内容
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '50%'],//半径，支持绝对值（px）和百分比，百分比计算比，传数组实现环形图，[内半径，外半径]

          //标签，饼图默认显示在外部，离饼图距离由labelLine.length决定，
          //漏斗图默认显示在右侧，离图形距离由labelLine.length决定
          //地图标签不可指定位置，折线图，柱形图，K线图，散点图可指定position见下
          label: {
            normal: {
              position: 'inner'//标签在内部显示(为outer时显示在外面)
            }
          },
          //标签视觉引导线，默认显示(这是内部数据,不需要显示引导线)
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '直达', selected: true, itemStyle: {normal: {color: '#4cb1a7'}}},
            {
              value: 679,
              name: '营销广告',
              itemStyle: {
                normal: {
                  color: '#ec7777'
                }
              }
            },
            {
              value: 1548,
              name: '搜索引擎',
              itemStyle: {
                normal: {
                  color: '#e5c649'
                }
              }
            }
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '90%'],

          data: [
            {value: 335, name: '直达', itemStyle: {normal: {color: '#4cb1a7'}}},
            {value: 310, name: '邮件营销', itemStyle: {normal: {color: '#ec7777'}}},
            {value: 234, name: '联盟广告', itemStyle: {normal: {color: '#e5c649'}}},
            {value: 135, name: '视频广告', itemStyle: {normal: {color: '#a6c733'}}},
            {value: 1048, name: '百度', itemStyle: {normal: {color: '#57bcda'}}},
            {value: 251, name: '谷歌', itemStyle: {normal: {color: '#489e95'}}},
            {value: 147, name: '必应', itemStyle: {normal: {color: '#ecd77f'}}},
            {value: 102, name: '其他', itemStyle: {normal: {color: '#94b033'}}}
          ]
        }
      ]
    }
  })
  ,

  methods: {


  }
  }
</script>

<style scoped>
  .el-col {
    margin-bottom: 16px;
  }

  .material-icons {
    font-size: 80px;
    color: #ddd;
  }

  .cart-string {
    height: 100px;
    padding-top: 10px;
    font-size: 1.1rem;

  }

  .c-charts {
    height: 400px;
    width: 100%;
  }

</style>
