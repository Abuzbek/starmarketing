import Vue from 'vue'
import Vuex from 'vuex'
import module from './modules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    module
  }
})
