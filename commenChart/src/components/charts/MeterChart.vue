<template>
  <div class="c-charts">
    <IEcharts :option="option" ref="meterChart"></IEcharts>
  </div>

</template>

<script type="text/ecmascript-6">
  import IEcharts from 'vue-echarts-v3';
  var context = {};
  export default {
    beforeCreate () {
      context = this;
    },
    props: ['meterData'],
    components: {
      IEcharts
    },
    data: () => ({
      option: {
        series: [],
        ratioLeft:0,//左侧圆显示的比例
        ratioRight:0,//右侧圆显示的比例
        nameLeft:'',//标识左侧圆的name
      }
    }),
    methods: {
      formatterText: function (params) {
        if (context.nameLeft===params.name){
          return context.ratioLeft + '%' + '\n' + params.name;
        }
        return context.ratioRight + '%' + '\n' + params.name;
      },
      createSeries: function () {
        context.nameLeft=context.meterData.leftData.content;
        var mainData = [];
        mainData.push({
          name: context.meterData.centerData.topText,
          value: 100,
          hismax: 100
        });
        mainData.push({
          name: context.meterData.leftData.content,
          value: 60,
          hismax: 100
        });
        mainData.push({
          name: context.meterData.rightData.content,
          value: 30,
          hismax: 100
        });
        var result = [];
        //两侧有圆环,中间文字的样式
        var itemRingLabel = {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
          }
        };
        //两侧没有圆环,中间文字的样式
        var itemNoRingLabel = {
          normal: {
            show: true,
            position: 'center',
            textStyle: {
              fontSize: '14',
              color: '#5B3351'
            },
            formatter: function (params) {
              //params是data里数据传过来的
              return params.name + '\n'+' '+'\n' + context.meterData.centerData.content + '\n'+' '+'\n' + context.meterData.centerData.bottomText;
            }
          },
          emphasis: {
            show: true,
            position: 'center',
            textStyle: {
              fontSize: '14',
              color: '#5B3351'
            }
          }
        };
        //两侧有圆环的样式
        var itemRingStyle = {
          normal: {
            color: '#E6E7E2',
            textStyle: {
              show: false
            }
          },
          emphasis: {//强调样式（悬浮时样式）
            show: false,
          }
        };
        //正中间没有圆环的样式
        var itemNoRingStyle = {
          normal: {
            color: '#F8DFEC'
          },
          emphasis: {//强调样式（悬浮时样式）
            show: false,
          }
        };
        for (var i = 0; i < mainData.length; i++) {
          //color:内层圆的颜色
          //centerData:内层的圆
          //ringColor:圆环的颜色
          var center, radius, data, color, centerData, ringColor;
          radius = ['40%', '50%'];
          if (i === 0) {
            center = ['50%', '32%'];
            radius = ['0%', '50%'];
            data = {
              name: ' ',
              type: 'pie',
              center: center,
              radius: radius,
              label: itemNoRingLabel,
              animation: false,
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                //一个data数组中有两个数据,他们的value分别代表着他们的比例
                {
                  name: mainData[i].name,
                  value: mainData[i].value,
                  itemStyle: itemNoRingStyle
                }
              ]
            }
          } else {
            if (i === 1) {
              context.ratioLeft = context.meterData.leftData.ratio;
              center = ['27%', '58%'];
              color = '#4177BB';
              ringColor = '#68CDFE';
            } else {
              context.ratioRight = context.meterData.rightData.ratio;
              center = ['73%', '58%'];
              color = '#A867A7';
              ringColor = '#AFD895';
            }
            data = {
              name: '外层',
              type: 'pie',
              center: center,
              radius: radius,
              label: itemRingLabel,
              animation: false,
              clockWise: false,//是否逆时针(先显示淡灰色)
              data: [
                //一个data数组中有两个数据,他们的value分别代表着他们的比例
                {
                  name: 'other',
                  value: mainData[i].hismax - mainData[i].value,
                  itemStyle: itemRingStyle
                }, {
                  name: mainData[i].name,
                  value: mainData[i].value,
                  itemStyle: {
                    normal: {color: ringColor}, textStyle: {
                      show: false
                    }
                  }
                }]
            };
            centerData = {
              name: mainData[i].name,
              type: 'pie',
              center: center,
              radius: ['0%', '40%'],
              animation: false,
              labelLine: { //标签视觉引导线
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'center',
                  formatter: function (params) {
                    //params是data里数据传过来的
                    return context.formatterText(params);
                  },
                  textStyle: {
                    fontSize: '16',
                    color: '#fff'
                  }
                },
                emphasis: {
                  show: true,
                  position: 'center',
                  formatter: function (params) {
                    //params是data里数据传过来的
                    return context.formatterText(params);
                  },
                  textStyle: {
                    fontSize: '16',
                    color: '#fff'
                  }
                }
              },
              data: [
                {
                  name: mainData[i].name,
                  value: 100,
                  itemStyle: {
                    normal: {
                      show: true,
                      color: color
                    }
                  }
                }]
            }
          }
          //外层data是圆环,内层是显示在上面的数据
          result.push(data);
          result.push(centerData);
        }
        return result;
      }
    },
    watch: {
      'meterData': function (val) {
        this.option.series = this.createSeries();
      },
    },
  }
</script>

<style scoped>

  .c-charts {
    height: 250px;
    width: 100%;
  }

</style>
