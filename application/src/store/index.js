import Vue from 'vue'
import Vuex from 'vuex'
import drivers from './modules/drivers'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        drivers
    }
})
