import * as types from '@/store/modules/_boilerplate/mutation-types';

export default {
  [types.SET_ERROR]: (state, error) => (state.error = error),
  [types.SET_DRIVERS]: (state, drivers) => (state.drivers = drivers),
  [types.SET_DRIVER]: (state, driver) => (state.driver = driver),
  [types.CLEAR_DRIVER]: (state) => (state.driver = null),
  [types.CLEAR_ERROR]: (state) => (state.error = null),
};
