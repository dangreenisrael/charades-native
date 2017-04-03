import { combineReducers } from 'redux';
import dictionary from './dictionary';
import ui from './ui';

export default combineReducers({
  dictionary,
  ui
});
