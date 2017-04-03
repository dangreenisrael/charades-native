import React, {Component} from 'react';
import {
  View, Container, Header, Title, Text, Button, Icon, Footer, FooterTab
} from 'native-base';
import {connect} from 'react-redux';
import {setDifficulty} from '../../../redux/actions-creators';

const icon = (difficulty)=>{
  switch (difficulty){
    case "Easy":
      return "ios-stopwatch-outline";
    case "Medium":
      return "ios-speedometer-outline";
    case "Hard":
      return "ios-trophy-outline";
  }
};

class DifficultyButton extends Component {
  static propTypes = {
    setDifficulty: React.PropTypes.func,
    difficulty: React.PropTypes.string,
    currentDifficulty: React.PropTypes.string,
  };
  
  constructor(props){
    super(props);
    this.setDifficulty = this.setDifficulty.bind(this);
  }
  setDifficulty() {
    const {setDifficulty, difficulty} = this.props;
    setDifficulty(difficulty);
  }
  
  render() {
    const {difficulty, currentDifficulty} = this.props;
    return (
      <Button title={difficulty}
              active={currentDifficulty === difficulty}
              onPress={this.setDifficulty}>
        <Text>
          {difficulty}
        </Text>
        <Icon name={icon(difficulty)}/>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  currentDifficulty: state.ui.difficulty
});

const bindAction = (dispatch) => ({
  setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty)),
});
export default connect(mapStateToProps, bindAction)(DifficultyButton);