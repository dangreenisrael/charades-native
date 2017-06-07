import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {GenerateWord, mapDispatchToProps} from '.';

describe('Generate Word', () => {
  it('renders correctly', () => {
    const mock = jest.fn();
    const tree = renderer.create(<GenerateWord category="Things" updateCategory={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Maps dispatch properly', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.generateWord('Foo');
    expect(dispatch).toHaveBeenCalled();
  });
});
