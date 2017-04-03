import {SET_DIFFICULTY, UPDATE_DICTIONARY, SET_CURRENT_WORD} from './types';

export const setDifficulty = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    difficulty: difficulty
  };
};

export const setCurrentWord = (word) => {
  return {
    type: SET_CURRENT_WORD,
    word: word
  };
};


export const updateDictionary = ({difficulty, word}) => {
    return {
      type: UPDATE_DICTIONARY,
      difficulty: difficulty,
      word: word
    };
};