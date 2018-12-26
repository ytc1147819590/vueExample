
// 将我们在states中定义的值暴露在store.getters对象中，便于我们在组件中可以通过store.getters.bookList访问数据
//把state的状态放到getters，返回的值是根据依赖，可以看做是state的计算属性(类似vue的计算属性)
const getters = {
  add: (state) => {
    state.user.type = '方式'
    return state.user
  }
}

export default getters

