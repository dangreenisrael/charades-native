/**
 * Created by Dan on 2017-02-05.
 */
import {SET_CATEGORY, SET_CURRENT_WORD} from '../types';
import update from 'immutability-helper';

const DEFAULT_STATE = {
  category: 'Things',
  isVisible: false
};

export default (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case SET_CATEGORY:
        return update(state, {
          category: {$set: action.category},
          isVisible: {$set: false}
        });
      case SET_CURRENT_WORD:
        return update(state, {
          word: {$set: action.word},
          isVisible: {$set: true}
        });
      default:
        return state;
    }
  }
};
