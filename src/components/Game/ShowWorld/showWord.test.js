import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {ShowWord} from '.';

test('renders correctly', () => {
  const tree = renderer.create(<ShowWord />).toJSON();
  expect(tree).toMatchSnapshot();
});
