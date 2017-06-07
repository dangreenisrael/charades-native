import {generateWordAndSetAsCurrent} from './thunks';
import {UPDATE_WORD_LIST, SET_CURRENT_WORD} from './types';
describe('Thunk - Generate Word and Set it as the Current word', () => {
  const getState = () => ({
    ui: {
      category: 'Things'
    },
    category: {
      Things: ['Foo Bar']
    }
  });
  const dispatch = jest.fn();
  generateWordAndSetAsCurrent()(dispatch, getState);

  it('returns a function', () => {
    expect(typeof generateWordAndSetAsCurrent()).toBe('function');
  });

  it('dispatches UPDATE_WORD_LIST', () => {
    expect(dispatch).toHaveBeenCalledWith({
      category: 'Things',
      type: UPDATE_WORD_LIST,
      wordList: []
    });
  });
  it('dispatches SET_CURRENT_WORD', () => {
    expect(dispatch).toHaveBeenCalledWith({type: SET_CURRENT_WORD, word: 'Foo Bar'});
  });
});
