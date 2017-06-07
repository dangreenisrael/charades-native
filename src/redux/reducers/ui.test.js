import reducer from './ui';
import {SET_CATEGORY, SET_CURRENT_WORD} from '../types';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      category: 'Things',
      isVisible: false
    });
  });

  it('should set the category, and set isVisible to false', () => {
    const state = {
      category: 'Bla',
      isVisible: true
    };
    const action = {
      type: SET_CATEGORY,
      category: 'Movies'
    };

    expect(reducer({}, action)).toMatchObject({
      category: 'Movies',
      isVisible: false
    });
  });

  it('should set the current, and set isVisible to true', () => {
    const state = {
      word: 'Foo',
      isVisible: false
    };
    const action = {
      type: SET_CURRENT_WORD,
      word: 'Bar'
    };

    expect(reducer({}, action)).toMatchObject({
      word: 'Bar',
      isVisible: true
    });
  });
});
