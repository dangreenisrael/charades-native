import {SET_DIFFICULTY, GENERATE_WORD, SET_VISIBILITY} from './types';

export function setDifficulty(difficulty) {
  return {
    type: SET_DIFFICULTY,
    difficulty: difficulty
  };
}

export function generateWord(difficulty) {
  return {
    type: GENERATE_WORD,
    difficulty: difficulty
  };
}

export function setVisibility(visibility) {
  return {
    type: SET_VISIBILITY,
    visibility: visibility
  };
}
