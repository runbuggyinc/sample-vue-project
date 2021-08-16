import DriverServices from '@/services/_boilerplate';
import * as types from '@/store/modules/_boilerplate/mutation-types';

export default {
  async getDrivers({ commit }) {
    const result = await DriverServices.getDrivers();
    if (result.error) return commit(types.SET_ERROR, result.error);
    commit(types.SET_DRIVERS, result);
    return result;
  },
  async getDriver({ commit }, { id }) {
    const result = await DriverServices.getDriver({ id });
    if (result.error) return commit(types.SET_ERROR, result.error);
    commit(types.SET_DRIVER, result);
  },
  clearDriver({ commit }) {
    commit(types.CLEAR_DRIVER);
  },
  clearError({ commit }) {
    commit(types.CLEAR_ERROR);
  },
};
