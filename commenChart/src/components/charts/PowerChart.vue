<!--饼状图-->
<template>
  <div class="c-charts">
    <IEcharts :option="option"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  export default {
    components: {
      IEcharts
    },
    data: () => ({
      //两条一样的Y轴,每条的item
      yAxisItem: {
        type: 'category',
        position: "left",
        data: ['Top3', 'Top2', 'Top1'],
        axisTick: {//坐标轴小标记
          show: false
        },
        axisLine: {//坐标轴线
          show: true,
          lineStyle: {
            color: '#C2BDC1',
          }
        },
        splitLine: {//分隔线
          show: false
        },
        axisLabel: {//坐标轴文本标签选项
          rotate: 0,
          margin: 2,//坐标轴文本标签与坐标轴的间距，默认为8，单位px
          border:[2,3,4,6],
          textStyle: {
            color: '#ff0000'
          },
          formatter:function(params){
            return params;
          }
        }
      },
      //表中外层数据样式
      itemOutterStyle: {
        normal: {
          barBorderRadius: [0, 12, 12, 0],
          color: '#EDEDED'
        }
      },
      barWidth: '25px',
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          x: 'right',
          show: true,
          data: ['电费', '电量']
        },
        grid: {//直角坐标系内绘图网格
          x: '-2%',//距离左边
          x2: '7%',//距离右边
          y2: '3%',//距离下面
          y: '10%',//距离上面
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisTick: {//坐标轴小标记
            show: false
          },
          axisLine: {//坐标轴线
            show: false
          },
          splitLine: {//分隔线
            show: false
          },
          axisLabel: {//坐标轴文本标签
            show: false,
            rotate: 0,
            textStyle: {
              color: '#737373'
            }
          }
        },
        yAxis: [],
        series: [
          //yAxisIndex：当有双Y轴时，它可以设置链接到的Y轴是具体哪一个。当只有一个Y轴时，该参数默认为0，
          //且链接的就是一个Y轴；有双轴时，从0 开始，依次累加1
          {
            name: '男应报道人数',
            type: 'bar',
            yAxisIndex: 0,
            itemStyle: [],
            data: [100, 100, 100]
          }, {
            name: '女应报道人数',
            type: 'bar',
            yAxisIndex: 0,
            itemStyle: [],
            data: [100, 100, 100]
          },
          //这一行是红色的数据
          {
            name: '电费',
            type: 'bar',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: [],
            data: [33, 66, 80],
          },
          //这一行是绿色的数据
          {
            name: '电量',
            type: 'bar',
            yAxisIndex: 1,
            zlevel: 2,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: [],
            data: [46, 83, 80],
          }]
      }
    }),
    methods: {
      //表中内层数据样式
      getItemInnerStyle: function (corlor) {
        return {
          normal: {
            //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，
            //如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
            barBorderRadius: [0, 12, 12, 0],
            color: corlor,
            label: {
              show: true,
              textStyle: {
                color: '#fff'
              },
              position: 'insideRight',
            }
          }
        }
      }
    },
    created: function () {
      //设置外层背景样式
      this.option.series[0].itemStyle = this.itemOutterStyle;
      this.option.series[1].itemStyle = this.itemOutterStyle;
      //设置内层数据样式,因为两条数据的颜色不一样,所以需要传入颜色
      this.option.series[2].itemStyle = this.getItemInnerStyle('#4DB9E7');
      this.option.series[3].itemStyle = this.getItemInnerStyle('#B18FC1');
      //设置每条数据的矩形的宽度
      this.option.series.barWidth = this.barWidth;
      //设置两条Y轴
      this.option.yAxis = [this.yAxisItem,this.yAxisItem];
    }
  }
</script>

<style scoped>
  .c-charts {
    height: 250px;
    width: 100%;
  }
</style>
