/**
 * Created by Dan on 2017-02-05.
 */
import {SET_DIFFICULTY, GENERATE_WORD, SET_VISIBILITY} from '../actions/types';
import wordList from '../../words/word-list';
import update from 'immutability-helper';
import _ from 'lodash';

const DEFAULT_STATE = {
  difficulty: 'Easy',
  word: 'dog',
  isVisible: false,
  Easy: wordList.Easy,
  Medium: wordList.Medium,
  Hard: wordList.Hard
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case SET_DIFFICULTY:
        return update(state, {difficulty: {$set: action.difficulty}});
      case SET_VISIBILITY:
        return update(state, {isVisible: {$set: action.visibility}});
      case GENERATE_WORD:
        const {difficulty} = action;
        const currentList = _.shuffle(state[difficulty]);
        const word = currentList.pop();
        return update(state,{
          word: {$set: word},
          [difficulty]: {$set:currentList}
        });
        return state;
      default:
        return state;
    }
  }
};

export default rootReducer;
