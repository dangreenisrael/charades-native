import React, {Component} from 'react';
import {Text} from 'native-base';
import style from './style';
import {connect} from 'react-redux';
import {getCurrentWord, getVisibility} from '../../../redux/selectors';

// Use named export for unconnected component (for tests)
export class ShowWord extends Component {
  static propTypes = {
    word: React.PropTypes.string,
    isVisible: React.PropTypes.bool
  };

  render() {
    const {word, isVisible} = this.props;
    const text = isVisible ? word : 'Tap For a Word';
    return (
      <Text style={style}>
        {text}
      </Text>
    );
  }
}

const mapStateToProps = state => {
  return {
    word: getCurrentWord(state) || 'Tap For More Words',
    isVisible: getVisibility(state)
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(ShowWord);
