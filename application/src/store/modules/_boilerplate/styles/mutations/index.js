import * as types from '../../mutation-types';

export default {
  [types.SET_FONT_COLOR]: (state, color) => (state.fontColor = color),
  [types.SET_BACKGROUND_COLOR]: (state, color) =>
    (state.backgroundColor = color),
  [types.SET_FONT_SIZE]: (state, size) => (state.fontSize = size),
};
