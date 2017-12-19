<template>
  <div class="c-charts">
    <IEcharts :option="bar"></IEcharts>
  </div>


</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  export default {
    components: {
      IEcharts
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
          data: ['股份', '全资子公司', '控股子公司', '存续']
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
            data: ['水', '电', '煤气', '油', '天然气'],
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
        series: [
          {
            name: '股份',
            type: 'bar',
            data: [320, 332, 301, 334, 300]
          },
          {
            name: '全资子公司',
            type: 'bar',
            data: [120, 132, 101, 134, 150]
          },
          {
            name: '控股子公司',
            type: 'bar',
            data: [220, 182, 191, 234, 200]
          },
          {
            name: '存续',
            type: 'bar',
            data: [150, 232, 201, 154, 150]
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
