import 'react-native';
import {shallow, mount, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import {CategoryButton, mapDispatchToProps} from '.';

describe('CategorySelector', () => {
  const setCategory = jest.fn();
  const Component = shallow(
    <CategoryButton category="Movies" currentCategory="Thing" setCategory={setCategory} />
  );
  Component.simulate('press');

  it('Renders Correctly', () => {
    expect(toJson(Component)).toMatchSnapshot();
  });
  it('Calls setCategory correctly', () => {
    expect(setCategory).toHaveBeenCalledWith('Movies');
  });
  it('Maps dispatch properly', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.setCategory('Foo');
    expect(dispatch).toHaveBeenCalledWith({category: 'Foo', type: 'SET_CATEGORY'});
  });
});
