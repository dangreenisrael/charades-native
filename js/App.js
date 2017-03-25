
import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
// import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Game from './components/game';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <Game />
      </Provider>
    )
  }
}

export default App;
