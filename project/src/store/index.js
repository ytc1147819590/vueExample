
import Vue from 'vue'
import Vuex from 'vuex'
import state from './states.js'
import mutation from './mutations.js'
import action from './actions.js'
import getter from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutation,
  action,
  getter
})

export default store
