import _ from 'lodash';

export const getDifficulty = ({ui}) => ui.difficulty;
export const getCurrentWord = ({ui}) => ui.word;
export const getVisibility = ({ui}) => ui.isVisible;
export const getGeneratedWord = ({ui, dictionary}) => _.sample(dictionary[ui.difficulty]);

