import Vue from 'vue'
import Vuex from 'vuex'
import drivers from './modules/drivers'
import * as driverTypes from './modules/drivers/types'

Vue.use(Vuex);

const getters = {};

const actions = {};

export default new Vuex.Store({
    actions: actions,
    getters: getters,
    modules: {
        [driverTypes.MODULE_NAME]: drivers
    }
})
