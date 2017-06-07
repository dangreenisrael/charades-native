import wordsByCategory from '../wordsByCategory';
import reducer from './wordList';
import {UPDATE_WORD_LIST} from '../types';

describe('Word List reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject(wordsByCategory);
  });

  it('should update UPDATE_WORD_LIST', () => {
    const action = {
      type: UPDATE_WORD_LIST,
      category: 'Foo',
      wordList: ['Bar']
    };
    const state = {
      Foo: ['Bar', 'Baz']
    };
    expect(reducer(state, action)).toMatchObject({
      Foo: ['Bar']
    });
  });
});
