/**
 * Created by Dan on 2017-02-05.
 */
import {UPDATE_DICTIONARY} from '../types';
import wordList from './dictionary/word-list';
import update from 'immutability-helper';
import _ from 'lodash';

const DEFAULT_STATE = {
  Easy: wordList.Easy,
  Medium: wordList.Medium,
  Hard: wordList.Hard
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case UPDATE_DICTIONARY:
        const {difficulty, word} = action;
        const dictionary = state[difficulty];
        return update(state,{
          [difficulty]: {$set:_.pull(dictionary, word)}
        });
        return state;
      default:
        return state;
    }
  }
};

export default rootReducer;
