<!--饼状图-->
<template>
  <div class="c-charts">
    <IEcharts :option="pie"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  export default {
    props: ['pieData'],
    components: {
      IEcharts
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
          data: []//有哪些选项
        },
        series: [
          //series（通用）驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效
          {
            name: ' ',
            type: 'pie',
            center: ['35%', '50%'],//圆心坐标
            radius: ['50%', '80%'],
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
            data: []
          }
        ]
      }
    }),
    methods: {
      //获取图例数据
      nameList: function () {
        let list = [];
        for (let i = 0; i < this.pieData.length; i++) {
          list.push(this.pieData[i].name);
        }
        return list;
      },
      //获取内容区域数据
      getData: function () {
        let list = [];
        for (let i = 0; i < this.pieData.length; i++) {
          var dataItem = {value: 0, name: '', itemStyle: {normal: {color: ''}}};
          dataItem.value = this.pieData[i].value;
          dataItem.name = this.pieData[i].name;
          dataItem.itemStyle.normal.color = this.pieData[i].color;
          list.push(dataItem);
        }
        return list;
      },
      updateData: function () {
        this.pie.legend.data = this.nameList();
        this.pie.series[0].data = this.getData();
      }
    },
    watch: {
      'pieData': function (val) {
        this.updateData();
      },
    }
  }
</script>

<style scoped>
  .c-charts {
    height: 250px;
    width: 100%;
  }
</style>
