import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {GenerateWord} from '.';

describe('Generate Word', () => {
  it('renders correctly', () => {
    const mock = jest.fn();
    const tree = renderer
      .create(<GenerateWord category="Things" updateDictionary={mock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
