import { combineReducers } from 'redux';
import category from './wordList';
import ui from './ui';

export default combineReducers({
  category,
  ui
});
