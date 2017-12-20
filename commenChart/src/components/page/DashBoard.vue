<template>
  <div class="main">
    <el-row :gutter="10" class="row-top">
      <el-col :span="8">
        <el-card class="chart-top-left">
          <!--饼状图-->
          <PieChart :pieData="pieData"></PieChart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="chart-top-center">
          <!--仪表盘-->
          <MeterChart :meterData="meterData"></MeterChart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="chart-top-right">
          <PowerChart :powerData="powerData"></PowerChart>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="row-bottom">
      <el-col :span="8">
        <el-card class="chart-bottom-left">
          <!--上海电信区局地图-->
          <RegionMap></RegionMap>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="chart-bottom-right">
          <BarChart :barData="barData"></BarChart>
        </el-card>
      </el-col>
    </el-row>

  </div>


</template>

<script type="text/ecmascript-6">
  import PieChart from '../charts/PieChart.vue';
  import RegionMap from '../charts/RegionMap.vue';
  import BarChart from '../charts/BarChart.vue';
  import MeterChart from '../charts/MeterChart.vue';
  import PowerChart from '../charts/PowerChart.vue';
  export default {
    data(){
      return {
        pieData:[],
        meterData:[],
        barData:[],
        powerData:[],
      }
    },
    components: {
      PieChart, RegionMap, BarChart, MeterChart, PowerChart
    },
    created: function () {
      this.$http.get('/api/nh').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.pieData = response.data;
        }
      });
      this.$http.get('/api/meter').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.meterData = response.data;
        }
      });
      this.$http.get('/api/bar').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.barData = response.data;
        }
      });
      this.$http.get('/api/power').then((response)=> {
        response = response.body;
        if (response.errno === 0) {
          this.powerData = response.data;
        }
      });
    },
  }
</script>

<style scoped>
  .main {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .chart-top-left, .chart-top-center, .chart-top-right, .chart-bottom-left, .chart-bottom-right {
    height: 100%;
    margin-bottom: 10px;
  }

  .row-top, .row-bottom {
    height: 50%;
  }
</style>
