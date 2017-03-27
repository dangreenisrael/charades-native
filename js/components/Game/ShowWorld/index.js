import React, {Component} from 'react';
import {Text} from 'native-base';
import style from './style';
import {connect} from 'react-redux';

class ShowWord extends Component {
  static propTypes = {
    word: React.PropTypes.string,
    isVisible: React.PropTypes.bool
  };
  
  render() {
    const {word, isVisible}= this.props;
    const text = isVisible ? word : "Tap For a Word";
    return (
      <Text style={style}>
        {text}
      </Text>
    );
  }
}

const mapStateToProps = state => ({
  word: state.charades.word,
  isVisible: state.charades.isVisible
});

export default connect(mapStateToProps)(ShowWord);
