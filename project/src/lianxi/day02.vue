<template>
  <div>
    <el-table :data="list" border>
      <!--多选-->
      <el-table-column align="center" v-if="multiple" type="selection" width="50"></el-table-column>
      <!--单选-->
      <el-table-column v-if="multiple" label="选择" align="center" width="50">
        <template slot-scope="scope">
          <el-radio v-model="radio"></el-radio>
        </template>
      </el-table-column>
      <!--数据-->
      <el-table-column v-for="(item, index) in tableHeader" :prop="item.name" :label="item.label" :key="index"></el-table-column>
      <!--操作-->
      <el-table-column :label="operation.label" v-if="operation.show">
        <template slot-scope="scope">
          <el-button v-for="(item, index) in operation.list" :key="index" :type="item.type">{{item.label}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--<div>{{radio}}</div>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default() {
          return []
        }
      },
      tableHeader: {
        type: Array,
        default() {
          return []
        }
      },
      operation: {
        type: Object,
        default() {
          return {}
        }
      },
      radio: {}
    }
  }
</script>

<style lang="scss" scoped>

</style>
