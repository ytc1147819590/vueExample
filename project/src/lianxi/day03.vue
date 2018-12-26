<template>
    <div>
      <div>
        <p>mapState通过扩展运算符将store.state.list 映射this.list{{book}}{{user}}</p>
        <p>'book'是state的值</p>
      </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'book',
          'user'
        ]),
        ...mapGetters([
          ''
        ])
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
