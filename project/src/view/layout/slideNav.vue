<template>
  <div>
    <div class="nav">
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item>
          <i class="el-icon-info"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-location"></i><span>资讯管理</span></template>
          <el-menu-item-group>
            <el-menu-item index="1-1">发布资讯</el-menu-item>
            <el-menu-item index="1-2">编辑资讯</el-menu-item>
          </el-menu-item-group>
          <!--<el-submenu index="1-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
          <!--</el-submenu>-->
        </el-submenu>
        <el-submenu>
          <template slot="title"><i class="el-icon-location"></i><span>快讯管理</span></template>
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="1-1">发布资讯</el-menu-item>-->
            <!--<el-menu-item index="1-2">编辑资讯</el-menu-item>-->
          <!--</el-menu-item-group>-->
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
