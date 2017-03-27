import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateWord, setVisibility} from '../../../redux/actions/charades';
import {Text, Button} from 'native-base';
import styles from './styles';

class Container extends Component {
  static propTypes = {
    generateWord: React.PropTypes.func,
    difficulty: React.PropTypes.string
  };
  constructor(props){
    super(props);
    this.generateWord = this.generateWord.bind(this);
  }
  generateWord() {
    const {currentDifficulty, setVisibility, generateWord} = this.props;
    generateWord(currentDifficulty);
    setVisibility(true);
  }
  render() {
    return (
      <Button primary large
              title="Generate Word"
              onPress={this.generateWord}
              style={styles.centerButton}>
        <Text>
          Generate Word
        </Text>
      </Button>
    );
  }
  
}

const mapStateToProps = state => ({
  currentDifficulty: state.charades.difficulty
});

const bindAction = (dispatch) => {
  return {
    generateWord: (difficulty) => dispatch(generateWord(difficulty)),
    setVisibility: (visibility) => dispatch(setVisibility(visibility))
  };
};
export default connect(mapStateToProps, bindAction)(Container);
