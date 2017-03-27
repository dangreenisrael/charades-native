import React, {Component} from 'react';
import {
  View, Container, Header, Title, Text, Button, Icon, Footer, FooterTab
} from 'native-base';
import {connect} from 'react-redux';
import {setDifficulty, setVisibility} from '../../../redux/actions/charades';

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
    setVisibility: React.PropTypes.func
  };
  
  constructor(props){
    super(props);
    this.setDifficulty = this.setDifficulty.bind(this);
  }
  setDifficulty() {
    const {setDifficulty, difficulty, setVisibility} = this.props;
    setDifficulty(difficulty);
    setVisibility(false);
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
  currentDifficulty: state.charades.difficulty
});

const bindAction = (dispatch) => ({
  setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty)),
  setVisibility: (visibility) => dispatch(setVisibility(visibility))
});
export default connect(mapStateToProps, bindAction)(DifficultyButton);