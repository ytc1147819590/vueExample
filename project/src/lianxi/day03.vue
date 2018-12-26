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

      <div>
        <h1>mapMutations</h1>
        <p>mapMutations是State的方法{{book}}</p>
        <p>'ADD_BOOK'是类似vue methods的方法</p>
      </div>

      <div>
        <h1>mapActions</h1>
        <p>actions ，要执行的动作，如流程的判断、异步请求{{ADD_BOOK}}</p>
        <p> 提交一个名为 increment 的变化，名字可自定义，可以认为是类型名，与下方 mutations 中的 increment 对应 commit 提交变化，修改数据的唯一方式就是显式的提交 mutations</p>
      </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
        ]),
        ...mapActions([
          'ADD_BOOK'
        ])
      },
      mounted() {
        console.log(this)
        this.ADD_BOOK()
      }
    }
</script>

<style scoped>

</style>
