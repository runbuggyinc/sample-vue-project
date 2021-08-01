// initial state
const state = {
    requestedAllDrivers: false,
    drivers: null
};

// getters
const getters = {
    getDriverById: (state, id) =>  state.drivers?.[id]
};

// actions
const actions = {
    setDrivers({ commit }, payload) {
        commit('SET_DRIVERS', payload)
    },
    setDriver({ commit }, driver) {
        commit('SET_DRIVER', driver)
    }
};

// mutations
const mutations = {
    SET_DRIVERS(state, data) {
        // Create a driver 'dictionary' by id for fast/easy access by id
        state.drivers = data.reduce((acc, driver) => {
            acc[driver.id] = driver;
            return acc;
        }, {});
        state.requestedAllDrivers = true;
    },
    SET_DRIVER(state, driver) {
        // make sure the driver has an id
        if (driver.id) {
            // if drivers is still null go ahead and make it an object
            if (!state.drivers) state.drivers = {};
            state.drivers[driver.id] = driver;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
