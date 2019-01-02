<!--<template>-->
    <!--<div class="indexs-container">-->
      <!--<div class="title-container">-->
        <!--<div class="title-query">-->
          <!--<div class="fl img"><img src="../../assets/img/index1.png" alt=""></div>-->
          <!--<div class="type">-->
            <!--<p>平均分: <span class="org">90</span></p>-->
            <!--<p>区群党机关</p>-->
            <!--<p>总数共有 <span class="bul">(90)</span>个</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="title-query">-->
          <!--<div class="fl img"><img src="../../assets/img/index2.png" alt=""></div>-->
          <!--<div class="type">-->
            <!--<p>平均分: <span class="org">90</span></p>-->
            <!--<p>区政府A类部门</p>-->
            <!--<p>总数共有 <span class="bul">(90)</span>个</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="title-query">-->
          <!--<div class="fl img"><img src="../../assets/img/index3.png" alt=""></div>-->
          <!--<div class="type">-->
            <!--<p>平均分: <span class="org">90</span></p>-->
            <!--<p>区政府B类部门</p>-->
            <!--<p>总数共有 <span class="bul">(90)</span>个</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="title-query">-->
          <!--<div class="fl img"><img src="../../assets/img/index4.png" alt=""></div>-->
          <!--<div class="type">-->
            <!--<p>平均分: <span class="org">90</span></p>-->
            <!--<p>街道办事处</p>-->
            <!--<p>总数共有 <span class="bul">(90)</span>个</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="title-query">-->
          <!--<div class="fl img"><img src="../../assets/img/index5.png" alt=""></div>-->
          <!--<div class="type">-->
            <!--<p>平均分: <span class="org">90</span></p>-->
            <!--<p>相关驻区单位及区属企业</p>-->
            <!--<p>总数共有 <span class="bul">(90)</span>个</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="indexs-content cl">-->
        <!--&lt;!&ndash;评估成绩&ndash;&gt;-->
        <!--<div class="fl">-->
          <!--<div class="title cl">-->
            <!--<div class="fl">评估成绩</div>-->
            <!--<select class="fr sel" v-model="value">-->
              <!--<option v-for="item in option" :key="item.val" :value="item.val" :label="item.label"></option>-->
            <!--</select>-->
          <!--</div>-->
          <!--<div id="evaluation"></div>-->
        <!--</div>-->
        <!--&lt;!&ndash;等次评定&ndash;&gt;-->
        <!--<div class="fr">-->
          <!--<div class="title cl">-->
            <!--<div class="fl">等次评定</div>-->
            <!--<select class="sel fr" v-model="value1">-->
              <!--<option v-for="item in option1" :key="item.val" :value="item.val" :label="item.label"></option>-->
            <!--</select>-->
          <!--</div>-->
          <!--<div id="equal"></div>-->
        <!--</div>-->
        <!--&lt;!&ndash;指标完成图&ndash;&gt;-->
        <!--<div class="fl mt_5">-->
          <!--<div class="title cl">-->
            <!--<div class="fl">指标完成图</div>-->
            <!--<select class="fr sel" v-model="value2">-->
              <!--<option v-for="item in option2" :key="item.val" :value="item.val" :label="item.label"></option>-->
            <!--</select>-->
          <!--</div>-->
          <!--<div id="index"></div>-->
        <!--</div>-->
        <!--&lt;!&ndash;通告&ndash;&gt;-->
        <!--<div class="fr mt_5">-->
          <!--<common v-bind="announcement"></common>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import echarts from 'echarts'-->
  <!--import common from './common'-->
  <!--export default {-->
    <!--components: {-->
      <!--common-->
    <!--},-->
    <!--data() {-->
      <!--return {-->
        <!--value: '',-->
        <!--value1: '',-->
        <!--value2: '',-->
        <!--option: [-->
          <!--{-->
            <!--label: '1',-->
            <!--val: '1'-->
          <!--}, {-->
            <!--label: '2',-->
            <!--val: '2'-->
          <!--}-->
        <!--],-->
        <!--option1: [-->
          <!--{-->
            <!--label: '1',-->
            <!--val: '1'-->
          <!--}, {-->
            <!--label: '2',-->
            <!--val: '2'-->
          <!--}-->
        <!--],-->
        <!--option2: [-->
          <!--{-->
            <!--label: '1',-->
            <!--val: '1'-->
          <!--}, {-->
            <!--label: '2',-->
            <!--val: '2'-->
          <!--}-->
        <!--],-->
        <!--announcement: {-->
          <!--title: '通知公告',-->
          <!--content: [-->
            <!--{-->
              <!--label: '通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告',-->
              <!--date: '2018.1.5'-->
            <!--}, {-->
              <!--label: 'Element 的 theme-chalk 使用 SCSS 编写，如果你的项目',-->
              <!--date: '2018.1.5'-->
            <!--}, {-->
              <!--label: 'Element 的 theme-chalk 使用 SCSS 编写，如果你的项目',-->
              <!--date: '2018.1.5'-->
            <!--}, {-->
              <!--label: 'Element 的 theme-chalk 使用 SCSS 编写，如果你的项目',-->
              <!--date: '2018.1.5'-->
            <!--}, {-->
              <!--label: 'Element 的 theme-chalk 使用 SCSS 编写，如果你的项目',-->
              <!--date: '2018.1.5'-->
            <!--}, {-->
              <!--label: 'Element 的 theme-chalk 使用 SCSS 编写，如果你的项目',-->
              <!--date: '2018.1.5'-->
            <!--}-->
          <!--]-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--equal() {-->
        <!--var equal = echarts.init(document.getElementById('equal'))-->
        <!--var option = {-->
          <!--legend: {-->
            <!--orient: 'vertical',-->
            <!--data: ['A', 'B', 'C'],-->
            <!--right: '15%',-->
            <!--top: 'middle'-->
          <!--},-->
          <!--tooltip: {},-->
          <!--series: {-->
            <!--type: 'pie',-->
            <!--name: '等次评定',-->
            <!--radius: ['70%', '80%'],-->
            <!--avoidLabelOverlap: false,-->
            <!--label: {-->
              <!--normal: {-->
                <!--show: false,-->
                <!--position: 'center'-->
              <!--},-->
              <!--emphasis: {-->
                <!--show: true,-->
                <!--textStyle: {-->
                  <!--fontSize: '30',-->
                  <!--fontWeight: 'bold'-->
                <!--}-->
              <!--}-->
            <!--},-->
            <!--data: [-->
              <!--{ name: 'A', value: 1212, itemStyle: { color: '#05D9AE' }},-->
              <!--{ name: 'B', value: 2323, itemStyle: { color: '#F8BE10' }},-->
              <!--{ name: 'C', value: 1919, itemStyle: { color: '#2371ED' }}-->
            <!--]-->
          <!--}-->
        <!--}-->
        <!--equal.setOption(option)-->
      <!--},-->
      <!--index() {-->
        <!--var index = echarts.init(document.getElementById('index'))-->
        <!--var option = {-->
          <!--legend: {-->
            <!--data: ['完成个数'],-->
            <!--right: '1%'-->
          <!--},-->
          <!--tooltip: {},-->
          <!--xAxis: {-->
            <!--type: 'category',-->
            <!--axisTick: {-->
              <!--interval: false-->
            <!--},-->
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
            <!--axisLine: {-->
              <!--lineStyle: {-->
                <!--color: '#CCCCCC'-->
              <!--}-->
            <!--},-->
            <!--data: ['区纪委监委', '区委(区政府)办公室', '区委组织部(区编办)', '区委宣传部(文体旅游局)', '区委统战部', '区委政法委', '区群团工作部', '区委党校', '区人大常委会机关', '区政协机关']-->
          <!--},-->
          <!--yAxis: {-->
            <!--axisLine: {-->
              <!--lineStyle: {-->
                <!--color: '#CCCCCC'-->
              <!--}-->
            <!--},-->
            <!--type: 'value'-->
          <!--},-->
          <!--series: [{-->
            <!--name: '完成个数',-->
            <!--lineStyle: {-->
              <!--color: '#F6DB93'-->
            <!--},-->
            <!--itemStyle: {-->
              <!--color: '#F6DB93'-->
            <!--},-->
            <!--data: [20, 92, 90, 93, 90, 30, 20, 90, 10, 20],-->
            <!--type: 'line'-->
          <!--}]-->
        <!--}-->
        <!--index.setOption(option)-->
      <!--},-->
      <!--evaluation() {-->
        <!--var evaluation = echarts.init(document.getElementById('evaluation'))-->
        <!--var option = {-->
          <!--title: {-->
            <!--text: '单位:分',-->
            <!--textStyle: {-->
              <!--color: '#ccc',-->
              <!--align: 'center',-->
              <!--fontSize: 16-->
            <!--}-->
          <!--},-->
          <!--tooltip: {},-->
          <!--xAxis: {-->
            <!--axisLine: {-->
              <!--lineStyle: {-->
                <!--color: '#ccc'-->
              <!--}-->
            <!--},-->
            <!--axisTick: {-->
              <!--interval: false-->
            <!--},-->
            <!--data: ['坪山街道办', '坑辛街道办', '龙田街道办', '石井街道办', '马峦街道办', '碧岭街道办']-->
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
                <!--color: '#F6F6F6'-->
              <!--}-->
            <!--}-->
          <!--},-->
          <!--series: [-->
            <!--{-->
              <!--type: 'bar',-->
              <!--itemStyle: {-->
                <!--normal: { color: '#007BFC' }-->
              <!--},-->
              <!--barGap: '-100%',-->
              <!--barCategoryGap: '40%',-->
              <!--data: [10, 20, 30, 40, 50, 60],-->
              <!--barWidth: 20-->
            <!--}-->
          <!--]-->
        <!--}-->
        <!--evaluation.setOption(option)-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--this.equal()-->
      <!--this.evaluation()-->
      <!--this.index()-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
  <!--p{-->
    <!--margin: 0;-->
    <!--line-height: 24px;-->
  <!--}-->
  <!--.cl:after{-->
    <!--content: '';-->
    <!--clear: both;-->
    <!--display: block;-->
    <!--width: 0;-->
    <!--height: 0;-->
  <!--}-->
  <!--.fl{-->
    <!--float: left;-->
  <!--}-->
  <!--.fr{-->
    <!--float: right;-->
  <!--}-->
  <!--.mt_5{-->
    <!--margin-top: 1.5%;-->
  <!--}-->
  <!--.org{-->
    <!--color: #FF8A00;-->
    <!--font-size: 18px;-->
  <!--}-->
  <!--.bul{-->
    <!--color: #2873DA;-->
  <!--}-->
<!--.indexs-container{-->
  <!--width: 100%;-->
  <!--height: 100%;-->
<!--}-->
  <!--.title-container{-->
    <!--/*height: 100px;*/-->
    <!--padding: 15px;-->
    <!--border-radius: 5px;-->
    <!--background-color: #fff;-->
    <!--box-shadow: 0 3px 6px rgba(168,168,199,.16);-->
    <!-- -webkit-box-shadow: 0 3px 6px rgba(168,168,199,.16);-->
    <!--display: flex;-->
    <!--justify-content: space-between;-->
    <!--.title-query{-->
      <!--width: 19%;-->
      <!--.img{-->
        <!--width: 70px;-->
        <!--height: 70px;-->
        <!--background-color: #EAF0FE;-->
        <!--display: inline-block;-->
        <!--img{-->
          <!--width: 100%;-->
          <!--height: 100%;-->
          <!--object-fit: cover;-->
        <!--}-->
      <!--}-->
      <!--.type{-->
        <!--display: inline-block;-->
        <!--max-width: 110px;-->
        <!--padding-left: 10px;-->
        <!--font-size: 14px;-->
        <!--color: #9C9BCF;-->
        <!--overflow: hidden;-->
        <!--text-overflow:ellipsis;-->
        <!--white-space: nowrap;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.indexs-content{-->
    <!--margin-top: 20px;-->
    <!--height: 85%;-->
    <!--&>div{-->
      <!--width: 49.5%;-->
      <!--height: 48%;-->
      <!--overflow: hidden;-->
      <!--border-radius: 5px;-->
      <!--background-color: #fff;-->
      <!--box-shadow: 0 3px 6px rgba(168,168,199,.16);-->
      <!-- -webkit-box-shadow: 0 3px 6px rgba(168,168,199,.16);-->
      <!--.title{-->
        <!--border-bottom: 1px solid #F1F1F3;-->
        <!--padding: 0 20px;-->
        <!--line-height: 50px;-->
        <!--color: #A6AAC2;-->
        <!--.sel{-->
          <!--width: 200px;-->
          <!--height: 30px;-->
          <!--margin-top: 10px;-->
          <!--border: 1px solid #ccc;-->
          <!--outline: none;-->
        <!--}-->
      <!--}-->
      <!--#evaluation,-->
      <!--#index,-->
      <!--#equal{-->
        <!--height: calc(100% - 50px);-->
        <!--width: 100%;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
