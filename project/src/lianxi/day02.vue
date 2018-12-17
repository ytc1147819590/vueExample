<template>
  <div>
    <el-table :data="list" border>
      <el-table-column v-if="multiple" type="selection" width="55"></el-table-column>
      <el-table-column v-if="multiple" label="选择">
        <template slot-scope="scope">
          <el-radio v-model="radio"></el-radio>
        </template>
      </el-table-column>
      <el-table-column v-for="(item, index) in tableHeader" :prop="item.name" :label="item.label" :key="index"></el-table-column>
      <el-table-column :label="operation.label" v-if="operation.show">
        <template slot-scope="scope">
          <el-button v-for="(item, index) in operation.list" :type="item.type">{{item.label}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div>{{radio}}</div>
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
