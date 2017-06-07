/**
 * Created by Dan on 2017-02-05.
 */
import {UPDATE_WORD_LIST} from '../types';
import wordsByCategory from '../wordsByCategory';
import update from 'immutability-helper';
import _ from 'lodash';

const DEFAULT_STATE = _.cloneDeep(wordsByCategory);
const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case UPDATE_WORD_LIST: {
        const {category, wordList} = action;
        return update(state, {
          [category]: {$set: wordList}
        });
      }
      default:
        return state;
    }
  }
};

export default rootReducer;
