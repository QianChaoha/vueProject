<template>
  <div class="main">
    <el-row :gutter="20" class="row-top">
      <el-col :span="8">
        <el-card class="chart-top-left">
          <!--饼状图-->
          <pieChart></pieChart>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="chart-top-center"></el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="chart-top-right"></el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="row-bottom">
      <el-col :span="8">
        <el-card class="chart-bottom-left">
          <!--上海电信区局地图-->
          <RegionMap></RegionMap>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="chart-bottom-right"></el-card>
      </el-col>
    </el-row>

  </div>


</template>

<script type="text/ecmascript-6">
  import pieChart from '../charts/pieChart.vue';
  import RegionMap from '../charts/RegionMap.vue';
  export default {
    data(){
      return {
        //percentage:10
      }
    },
    components: {
      pieChart,RegionMap
    }
  }
</script>

<style scoped>
  .main{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .chart-top-left, .chart-top-center, .chart-top-right, .chart-bottom-left, .chart-bottom-right {
    height: 100%;
  }

  .row-top, .row-bottom {
    height: 50%;
  }
</style>
