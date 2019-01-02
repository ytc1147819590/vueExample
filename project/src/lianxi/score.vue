<!--<template>-->
    <!--<div class="score-container">-->
        <!--<div id="score"></div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import echarts from 'echarts'-->
  <!--export default {-->
    <!--methods: {-->
      <!--score() {-->
        <!--var score = echarts.init(document.getElementById('score'))-->
        <!--var option = {-->
          <!--tooltip: {},-->
          <!--legend: {-->
            <!--show: true,-->
            <!--top: 0,-->
            <!--right: '10%',-->
            <!--data: ['优', '良', '中', '差']-->
          <!--},-->
          <!--xAxis: {-->
            <!--data: ['市绩效指标落实', '区重点建设项目落实', '市、区督查事项落实', '政务公开', '财政预算与支出进度情况', '人大建议、政协提案办理', '安全生产任务完成情况', '改革执行与创新成效', '办文质量和效率', '法治政府建设', '综合文稿质量', '新型智慧城市与数字政府建设', '民生述求落实'],-->
            <!--axisLabel: {-->
              <!--interval: 0,-->
              <!--formatter: function(params) {-->
                <!--var newParamsName = ''-->
                <!--var paramsNameNumber = params.length-->
                <!--var provideNumber = 4-->
                <!--var rowNumber = Math.ceil(paramsNameNumber / provideNumber)-->
                <!--if (paramsNameNumber > provideNumber) {-->
                  <!--for (var p = 0; p < rowNumber; p++) {-->
                    <!--var tempStr = ''-->
                    <!--var start = p * provideNumber-->
                    <!--var end = start + provideNumber-->
                    <!--if (p === rowNumber - 1) {-->
                      <!--tempStr = params.substring(start, paramsNameNumber)-->
                    <!--} else {-->
                      <!--tempStr = params.substring(start, end) + '\n'-->
                    <!--}-->
                    <!--newParamsName += tempStr-->
                  <!--}-->
                <!--} else {-->
                  <!--newParamsName = params-->
                <!--}-->
                <!--return newParamsName-->
              <!--}// 文字换行-->
            <!--},-->
            <!--axisTick: {-->
              <!--show: false-->
            <!--},-->
            <!--axisLine: {-->
              <!--lineStyle: {-->
                <!--color: '#CCCCCC'-->
              <!--}-->
            <!--},-->
            <!--z: 10-->
          <!--},-->
          <!--yAxis: {-->
            <!--axisLine: {-->
              <!--lineStyle: {-->
                <!--color: '#CCCCCC'-->
              <!--}-->
            <!--},-->
            <!--axisTick: {-->
              <!--show: false-->
            <!--},-->
            <!--axisLabel: {-->
              <!--textStyle: {-->
                <!--color: '#999'-->
              <!--}-->
            <!--}-->
          <!--},-->
          <!--series: [{-->
            <!--name: '优',-->
            <!--type: 'bar',-->
            <!--data: [0, 0, 0, 0, 10, 20, 0, 0, 10, 10, 0, 0, 0],-->
            <!--stack: 'one',-->
            <!--itemStyle: {-->
              <!--color: '#26D905',-->
              <!--barBorderRadius: [7, 7, 0, 0]-->
            <!--},-->
            <!--barWidth: 30-->
          <!--}, {-->
            <!--name: '良',-->
            <!--type: 'bar',-->
            <!--data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50],-->
            <!--stack: 'one',-->
            <!--itemStyle: {-->
              <!--color: '#00BBD1',-->
              <!--barBorderRadius: [7, 7, 0, 0]-->
            <!--},-->
            <!--barWidth: 30-->
          <!--}, {-->
            <!--name: '中',-->
            <!--type: 'bar',-->
            <!--data: [65, 20, 36, 10],-->
            <!--stack: 'one',-->
            <!--itemStyle: {-->
              <!--color: '#EEB83A',-->
              <!--barBorderRadius: [7, 7, 0, 0]-->
            <!--},-->
            <!--barWidth: 30-->
          <!--}, {-->
            <!--name: '差',-->
            <!--type: 'bar',-->
            <!--data: [0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0],-->
            <!--stack: 'one',-->
            <!--itemStyle: {-->
              <!--color: '#DA5B00',-->
              <!--barBorderRadius: [7, 7, 0, 0]-->
            <!--},-->
            <!--barWidth: 30-->
          <!--}]-->
        <!--}-->
        <!--score.setOption(option)-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--this.score()-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.score-container,#score{-->
  <!--width: 100%;-->
  <!--height: 99%;-->
<!--}-->
  <!--#score{-->
    <!--background-color: #fff;-->
    <!--border-radius: 10px;-->
  <!--}-->
<!--</style>-->
