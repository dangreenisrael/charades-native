import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Container, Header, Title, Text, Button, Icon, Footer, FooterTab} from 'native-base';
import {setDifficulty, generateWord} from '../../redux/actions/charades';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import ShowWord from './ShowWord';

class Anatomy extends Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};
    this.generateWord = this.generateWord.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }
  componentDidMount(){
    this.props.generateWord();
  }
  generateWord() {
    this.props.generateWord();
    this.setState({isVisible: true});
  }
  setDifficulty(difficulty) {
    this.props.setDifficulty(difficulty);
    this.setState({isVisible: false});
  }
  render() {
    const {difficulty, word} = this.props;
    const {isVisible} = this.state;
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title style={styles.headerTitle}>{difficulty} Words</Title>
        </Header>
        <View style={styles.mainView}>
          <ShowWord word={word} isVisible={isVisible}/>
          <Button primary large
                  title="Generate Word"
                  onPress={this.generateWord}
                  style={styles.centerButton}>
            <Text>
              Generate Word
            </Text>
          </Button>
        </View>
        <Footer >
          <FooterTab>
            <Button title="Easy" active={difficulty === "Easy"}
                    onPress={() => this.setDifficulty("Easy")}>
              <Text>
                Easy
              </Text>
              <Icon name="ios-stopwatch-outline"/>
            </Button>
            <Button title="Medium" active={difficulty === "Medium"}
                    onPress={() => this.setDifficulty("Medium")}>
              <Text>
                Medium
              </Text>
              <Icon name="ios-speedometer-outline"/>
            </Button>
            <Button title="Hard" active={difficulty === "Hard"}
                    onPress={() => this.setDifficulty("Hard")}>
              <Text>
                Hard
              </Text>
              <Icon name="ios-trophy-outline"/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setDifficulty: (difficulty) => dispatch(setDifficulty(difficulty)),
    generateWord: () => dispatch(generateWord())
  };
}

const mapStateToProps = state => ({
  word: state.charades.word,
  difficulty: state.charades.difficulty
});

export default connect(mapStateToProps, bindAction)(Anatomy);
