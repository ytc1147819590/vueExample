<template>
    <div>
      <div>
        <h1>mapState</h1>
        <p>mapState通过扩展运算符将store.state.list 映射this.list{{book}}{{user}}</p>
        <p>'book'是state的值</p>
      </div>

      <div>
        <h1>mapGetters</h1>
        <p>mapGetters是依赖State缓存来的{{add}}</p>
        <p>'add'是返回的值</p>
      </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
      computed: {
        ...mapState([
          'book',
          'user'
        ]),
        ...mapGetters([
          'add'
        ])
      },
      methods: {
        ...mapMutations([
          'ADD_BOOK'
        ])
      },
      mounted() {
        console.log(this)
      }
    }
</script>

<style scoped>

</style>
