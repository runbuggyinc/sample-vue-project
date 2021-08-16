import * as types from '../../mutation-types';
export default {
  setFontColor({ commit }, { color }) {
    commit(types.SET_FONT_COLOR, color);
  },
  setBackgroundColor({ commit }, { color }) {
    commit(types.SET_BACKGROUND_COLOR, color);
  },
  setFontSize({ commit }, { size }) {
    commit(types.SET_FONT_SIZE, size);
  },
};
