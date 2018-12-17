<template>
  <div>
    <Table v-bind="table"></Table>
  </div>
</template>

<script>
  import Table from './day02'
  export default {
    components: {
      Table
    },
    data() {
      return {
        table: {
          list: [{name: '11', phone:'22'}, {name: '111', phone: '222'}],
          tableHeader: [
            {label: '名字', name: 'name'},
            {label: '手机号', name: 'phone'},
            {label: '用户名', name: 'user'},
            {label: '密码', name: 'password'},
            {label: '地址', name: 'address'},
          ],
          operation: {
            show: true,
            label: '操作',
            list: [
              { label: '查看', type: 'primary' },
              { label: '添加'},
              { label: '删除', type: 'danger' }
            ],
            radio: 'tt'
          },
          radio: 'name'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
