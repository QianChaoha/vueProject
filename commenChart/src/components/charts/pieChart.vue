<!--饼状图-->
<template>
  <div class="c-charts">
    <IEcharts :option="pie"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
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
          show: false,
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"//内容格式器，鼠标悬浮时提示内容显示成什么样的格式
        },
        legend: {
          //legend 图例，每个图表最多仅有一个图例
          orient: 'vertical',//垂直显示
          x: 'right',//放置在饼状图的图例
          data: ['直达', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']//有哪些选项
        },
        series: [
          //series（通用）驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效
          {
            name: ' ',
            type: 'pie',
            center: ['35%', '50%'],//圆心坐标
            radius: ['60%', '80%'],
            selectedMode: 'single',
            avoidLabelOverlap: false,
            //标签，饼图默认显示在外部，离饼图距离由labelLine.length决定，
            //漏斗图默认显示在右侧，离图形距离由labelLine.length决定
            //地图标签不可指定位置，折线图，柱形图，K线图，散点图可指定position见下
            label: {
              normal: {
                show: false,
                position: 'center',//标签内容显示在饼状图的中间
                formatter: "{d}% \n\r{b}",//内容格式器，鼠标悬浮时提示内容显示成什么样的格式
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              emphasis: {//强调样式（悬浮时样式）
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold'
                }
              }
            },
            //标签视觉引导线，默认显示(这是内部数据,不需要显示引导线)
            labelLine: {
              normal: {
                show: false
              }
            },
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
  }
</script>

<style scoped>
  .c-charts {
    height: 250px;
    width: 100%;
  }
</style>
