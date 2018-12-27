
// 其实这里定义的方法只是将mutation.js中定义的方法进行了一次封装,就是去触发mutations.js中的方法。如果传如的参数需要异步获取的话，我们可以在这里等待异步返回成功后在触发mutations中的方法。
//用于异步请求 定义方法（动作）
const actions = {
  add_book({commit}, value) {  // ({commit,state}) 这种写法是 es6 中的对象解构
    // console.log(commit('ADD_BOOK'))
    commit('ADD_BOOK', value)
  },
  Login({ commit }, userinfo) {
    commit('LOGIN', userinfo)
  }
}

export default actions
