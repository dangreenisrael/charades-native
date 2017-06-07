/**
 * Created by Dan on 2017-02-05.
 */
import {SET_DIFFICULTY, SET_CURRENT_WORD} from '../types';
import update from 'immutability-helper';

const DEFAULT_STATE = {
  difficulty: 'Things',
  isVisible: false
};

export default (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case SET_DIFFICULTY:
        return update(state, {
          difficulty: {$set: action.difficulty},
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
