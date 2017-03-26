import React, {Component} from 'react';
import {Text} from 'native-base';

const style = {
  lineHeight: 50,
  fontSize: 40,
  textAlign: 'center',
  marginBottom: 100
};

class ShowWord extends Component {
  static propTypes = {
    word: React.PropTypes.string.isRequired,
    isVisible: React.PropTypes.bool.isRequired
    
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

export default ShowWord;
