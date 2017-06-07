import {SET_CATEGORY, SET_CURRENT_WORD, UPDATE_WORD_LIST} from './types';

export const setCategory = category => {
  return {
    type: SET_CATEGORY,
    category: category
  };
};

export const setCurrentWord = word => {
  return {
    type: SET_CURRENT_WORD,
    word: word
  };
};

export const updateWordList = ({category, wordList}) => {
  return {
    type: UPDATE_WORD_LIST,
    category,
    wordList
  };
};
