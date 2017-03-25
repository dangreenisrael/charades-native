/**
 * Created by Dan on 2017-02-05.
 */
import {SET_DIFFICULTY, GENERATE_WORD} from '../actions/charades';
import wordList from '../../words/word-list';
import _ from 'lodash';

const DEFAULT_STATE = {
  difficulty: 'Easy',
  word: '',
  Easy: wordList.easy,
  Medium: wordList.medium,
  Hard: wordList.hard,
  "Very Hard": wordList.veryHard
};

const generateWord = (state) =>{
  const {difficulty} = state;
  const wordList = state[difficulty];
  const newWord = _.sample(wordList);
  const newWordList = wordList.filter(eachWord=>{
    return eachWord !== newWord;
  });
  let tempObject = {
    word: newWord || "No More Words",
    [difficulty]: newWordList
  };

  return Object.assign({}, state, tempObject);
};

const setDifficulty = (state, action) => {
  return Object.assign({}, state, {difficulty: action.difficulty});
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  if (action) {
    switch (action.type) {
      case SET_DIFFICULTY:
        return setDifficulty(state, action);
      case GENERATE_WORD:
        return generateWord(state);
      default:
        return state;
    }
  }
};

export default rootReducer;
