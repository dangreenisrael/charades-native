import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentWord, updateDictionary} from '../../../redux/actions-creators';
import {getDifficulty, getGeneratedWord} from '../../../redux/selectors';

import {Text, Button} from 'native-base';
import styles from './styles';

class Container extends Component {
  static propTypes = {
    updateDictionary: React.PropTypes.func,
    difficulty: React.PropTypes.string
  };
  constructor(props){
    super(props);
    this.generateWord = this.generateWord.bind(this);
  }
  generateWord(){
    const {difficulty, dispatch} = this.props;
    const word = this.props.generateWord();
    dispatch(setCurrentWord(word));
    dispatch(updateDictionary({difficulty,word}))
  }
  render() {
    return (
      <Button primary large
              title="Generate Word"
              onPress={this.generateWord}
              style={styles}>
        <Text>
          Generate Phrase
        </Text>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  difficulty: getDifficulty(state),
  generateWord: ()=>getGeneratedWord(state)
});

const bindAction = (dispatch) => ({dispatch});

export default connect(mapStateToProps, bindAction)(Container);
