import {setCurrentWord, updateWordList} from './actionsCreators';
import {getCategory, getCurrentWordList} from './selectors';
import wordsByCategory from './wordsByCategory';
import _ from 'lodash';

export const generateWordAndSetAsCurrent = () => {
  return (dispatch, getState) => {
    const state = getState();
    const category = getCategory(state);
    const incomingWordList = getCurrentWordList(state).length
      ? getCurrentWordList(state)
      : [...wordsByCategory[category]];
    const word = _.sample(incomingWordList);
    const wordList = _.pull(incomingWordList, word);
    dispatch(updateWordList({category, wordList}));
    dispatch(setCurrentWord(word));
  };
};
