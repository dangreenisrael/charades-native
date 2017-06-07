export const getCategory = ({ui}) => ui.category;
export const getCurrentWord = ({ui}) => ui.word;
export const getVisibility = ({ui}) => ui.isVisible;
export const getCurrentWordList = ({ui, category}) => category[ui.category];
