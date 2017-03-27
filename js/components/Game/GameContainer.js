import React, {Component} from 'react';
import {connect} from 'react-redux';
import Game from './Game';

class Anatomy extends Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
  }
  render() {
    return <Game
      currentDifficulty={this.props.currentDifficulty}
      isVisible={this.state.isVisible}
      generateWord={this.generateWord}
      setDifficulty={this.setDifficulty}
    />
  }
}


const mapStateToProps = state => ({
  word: state.charades.word,
});

export default connect(mapStateToProps)(Anatomy);
