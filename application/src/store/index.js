import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Drivers from './modules/_boilerplate/drivers';
import Styles from './modules/_boilerplate/styles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Drivers,
    Styles,
  },
  plugins: [createPersistedState()],
});
