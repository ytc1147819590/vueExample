
// 在这个文件中定义对状态值的操作，增删改查。
//对srates的状态进行增删改查,类似于vue的方法

const mutations = {
  ADD_BOOK(state, book) {
    state.list.push(book)
  }
}

export default mutations
