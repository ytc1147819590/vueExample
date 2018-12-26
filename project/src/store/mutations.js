
// 在这个文件中定义对状态值的操作，增删改查。
//对srates的状态进行增删改查,类似于vue的方法 会接受 state 作为第一个参数 (同步)

const mutations = {
  ADD_BOOK(state) {
    console.log(state)
  }
}

export default mutations
