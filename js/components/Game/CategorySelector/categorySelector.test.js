import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {CategoryButton} from '.';

test('renders correctly', () => {
  const mock = jest.fn();
  const tree = renderer
    .create(<CategoryButton category="Movies" currentCategory="Thing" setCategory={mock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
