import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import {DifficultyButton} from '.';

test('renders correctly', () => {
  const mock = jest.fn();
  const tree = renderer
    .create(<DifficultyButton difficulty="Movies" currentDifficulty="Thing" setDifficulty={mock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
