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
      option :{
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['电费', '电量']
      },
      grid: {//直角坐标系内绘图网格
        x: '1%',//距离左边
        x2: '7%',//距离右边
        y2: '3%',//距离下面
        y: '10%',//距离上面
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
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
          show:false,
          rotate: 0,
          textStyle: {
            color: '#737373'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: ['Top3','Top2','Top1'],
        axisTick: {//坐标轴小标记
          show: false
        },
        axisLine: {//坐标轴线
          show: true,
          lineStyle:{
            color:'#C2BDC1',
          }
        },
        splitLine: {//分隔线
          show: false
        },
        axisLabel: {//坐标轴文本标签选项
          rotate: 0,
          margin: 2,//坐标轴文本标签与坐标轴的间距，默认为8，单位px
          textStyle: {
            color: '#ff0000'
          }
        }
      },
      series: [
        //三个数组,两个是显示在上面的数据,还有一个没有数据只是用来填充背景色的
        {
          name: '电费',
          type: 'bar',
          data: [18203, 23489, 29034],
          itemStyle: {
            normal: {
              //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，
              //如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
              barBorderRadius: [0,10,10,0],
              color: '#4DB9E7',
              label: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
                position: 'insideRight',
              }
            }
          }
        },
        {
          name: '电量',
          type: 'bar',
          data: [19325, 23438, 31000],
          itemStyle: {
            normal: {
              //柱形边框圆角，单位px，默认为0，支持传入数组分别指定柱形4个圆角半径，
              //如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
              barBorderRadius: [0,10,10,0],
              color: '#B18FC1',
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
