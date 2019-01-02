<!--<template>-->
    <!--<div class="main">-->
      <!--<section class="announcement">-->
        <!--<div class="title cl">-->
          <!--<div class="fl">{{title}}</div>-->
          <!--<div class="cur fr"><i class="el-icon-more"></i></div>-->
        <!--</div>-->
        <!--<ul class="list-container">-->
          <!--<li class="list cl" v-for="item in content"><i class="point"></i><span class="text fl">{{item.label}}</span><span :class="item.color === true ? 'active fr' : 'fr cor'">{{item.date}}</span></li>-->
        <!--</ul>-->
      <!--</section>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
      <!--props: {-->
        <!--title: {-->
          <!--type: String,-->
          <!--default: ''-->
        <!--},-->
        <!--content: {-->
          <!--type: Array,-->
          <!--default() {-->
            <!--return {-->
              <!--label: '',-->
              <!--date: '',-->
              <!--color: false-->
            <!--}-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->
  <!--.announcement{-->
    <!--/*background-color: #fff;*/-->
    <!--/*border-radius: 5px;*/-->
    <!--/*box-shadow: 0 3px 6px rgba(0,0,0,.16);*/-->
  <!--}-->
<!--.title{-->
  <!--line-height: 40px;-->
  <!--height: 40px;-->
  <!--color: #A6A9CC;-->
  <!--border-bottom: 1px solid #F3F4F6;-->
  <!--padding: 0 20px;-->
<!--}-->
<!--.cur{-->
  <!--cursor: pointer;-->
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
  <!--.list-container{-->
    <!--width: 100%;-->
    <!--/*max-height: 415px;*/-->
    <!--color: #6F7298;-->
    <!--padding-bottom: 15px;-->
    <!--.list{-->
      <!--padding-left: 40px;-->
      <!--padding-right: 20px;-->
      <!--position: relative;-->
      <!--line-height: 50px;-->
      <!--width: 100%;-->
      <!--cursor: pointer;-->
      <!--.point{-->
        <!--position: absolute;-->
        <!--top: 23px; left: 20px;-->
        <!--width: 5px;-->
        <!--height: 5px;-->
        <!--background-color: #6F7298;-->
        <!--border-radius: 50%;-->
      <!--}-->
      <!--.text{-->
        <!--width: 80%;-->
      <!--}-->
      <!--.active{-->
        <!--color: #F2263D;-->
      <!--}-->
      <!--.cor{-->
        <!--color: #BABDDB;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
