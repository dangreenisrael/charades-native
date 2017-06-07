import _ from 'lodash';

export const getCategory = ({ui}) => ui.category;
export const getCurrentWord = ({ui}) => ui.word;
export const getVisibility = ({ui}) => ui.isVisible;
export const getGeneratedWord = ({ui, dictionary}) => _.sample(dictionary[ui.category]);
