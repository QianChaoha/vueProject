<!--饼状图-->
<template>
  <div class="region-map">
    <IEcharts :option="map"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  let chinaMap = require('../../assets/map/shanghai.json')
  IEcharts.registerMap('上海', chinaMap)
  export default {
    components: {
       IEcharts
    },
    data: () => ({

      map: {
        tooltip: {
          //tooltip提示框，鼠标悬浮交互时的信息提
          show: true,
          trigger: 'item',
          formatter: "{b} 10000元"//内容格式器，鼠标悬浮时提示内容显示成什么样的格式
        },
        series: [
          {
            type: 'map',
            mapType: '上海',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                areaColor: '#5ECDD8',
                borderWidth: 1
              },
              emphasis: {
                areaColor: '#0CACC4',
                borderWidth: 1
              }
            },
          }
        ]
      }


    })
  }
</script>

<style scoped>
  .region-map {
    height: 250px;
    width: 100%;
  }
</style>
