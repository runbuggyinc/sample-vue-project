import * as types from './types'
import DriversService from "@/services/drivers";

// initial state
const state = {
    drivers: [],
    driver: {}
};



// actions
const actions = {
    async [types.GET_DRIVERS]({ commit }) {
        try {
            const data = await DriversService.getDrivers()
            commit(types.SET_DRIVERS, data)
            return data
        } catch (e) {
            throw new Error(e.message)
        }
    },


    async [types.GET_DRIVER]({ commit }, driverId) {
        try {
            const data = await DriversService.getDriver(driverId)
            commit(types.SET_DRIVER, data)
            return data;
        } catch (e) {
            throw new Error(e.message)
        }
    }
};

// mutations
const mutations = {
    [types.SET_DRIVERS](state, drivers) {
        state.drivers = drivers
    },

    [types.SET_DRIVER](state, driver) {
        state.driver = driver
    },
};

export default {
    state,
    actions,
    mutations,
    namespaced: true
};