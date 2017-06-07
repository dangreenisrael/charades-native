import {SET_CATEGORY, UPDATE_DICTIONARY, SET_CURRENT_WORD} from './types';

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

export const updateDictionary = ({category, word}) => {
  return {
    type: UPDATE_DICTIONARY,
    category: category,
    word: word
  };
};
