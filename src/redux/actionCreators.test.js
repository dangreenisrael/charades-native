import {setCategory, setCurrentWord, updateWordList} from './actionsCreators';
import {SET_CATEGORY, SET_CURRENT_WORD, UPDATE_WORD_LIST} from './types';
describe('Action creators', () => {
  it('Handles setCategory', () => {
    expect(setCategory('Foo')).toMatchObject({
      type: SET_CATEGORY,
      category: 'Foo'
    });
  });

  it('Handles setCurrentWord', () => {
    expect(setCurrentWord('Foo')).toMatchObject({
      type: SET_CURRENT_WORD,
      word: 'Foo'
    });
  });

  it('Handles updateWordList', () => {
    expect(updateWordList({category: 'Foo', wordList: ['Bar', 'Baz']})).toMatchObject({
      type: UPDATE_WORD_LIST,
      category: 'Foo',
      wordList: ['Bar', 'Baz']
    });
  });
});
