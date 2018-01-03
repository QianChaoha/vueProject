<template>
  <div class="c-charts">
    <IEcharts :option="bar"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  var context = {};
  export default {
    beforeCreate () {
      context = this;
    },
    props: ['barData'],
    components: {
      IEcharts
    },
    methods:{
      setSeriesData:function () {
        let list = [];
        for (let i = 0; i < context.barData.contentData.length; i++) {
          var dataItem = {
            name:  context.barData.contentData[i].name,
            type: 'bar',
            data:  context.barData.contentData[i].value,
            itemStyle: {
              normal: {
              //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，
              //如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
              color:context.barData.contentData[i].color ,
            }},
          };

          list.push(dataItem);
        }
        return list;
      },
      setLegend:function () {
        let list = [];
        for (let i = 0; i < context.barData.contentData.length; i++) {
          list.push(context.barData.contentData[i].name);
        }
        return list;
      },
      updataData:function () {
        this.bar.xAxis[0].data = context.barData.xData;
        this.bar.series = context.setSeriesData();
        this.bar.legend.data = context.setLegend();
      }
    },
    watch: {
      'barData': function (val) {
        this.updataData();
      },
    },
    data: () => ({
      bar: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [],
          x: 'right',
          show: true
        },
        grid: {
          x: '7%',//距离左边
          x2: '7%',//距离右边
          y2: '10%',//距离下面
          y: '10%',//距离上面
          containLabel: true
        },
        xAxis: [
          {
            axisTick: {//坐标轴小标记
              show: false
            },
            axisLine: {//坐标轴线
              show: false
            },
            splitLine: {//分隔线
              show: false
            },

            type: 'category',
            data: [],
          }
        ],
        yAxis: [
          {
            axisTick: {//坐标轴小标记
              show: false
            },
            axisLine: {//坐标轴线
              show: false
            },
            splitLine: {//分隔线
              show: false
            },
            type: 'value'
          }
        ],
        series: []
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
