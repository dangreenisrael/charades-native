/**
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './js/App';

export default class Charades extends Component {
  render() {
    return <App/>;
  }
}


AppRegistry.registerComponent('Charades', () => Charades);
