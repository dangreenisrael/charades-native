import {setCurrentWord, updateDictionary} from './actions-creators';
import {getCategory, getGeneratedWord} from './selectors';

export const generateWordAndSetAsCurrent = () => {
  return (dispatch, getState) => {
    const state = getState();
    const word = getGeneratedWord(state);
    const category = getCategory(state);
    dispatch(setCurrentWord(word));
    dispatch(updateDictionary({category, word}));
  };
};
