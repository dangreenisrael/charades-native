import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Container, Header, Title, Text, Button, Icon, Footer, FooterTab} from 'native-base';
import {setDifficulty, generateWord} from '../../redux/actions/charades';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Anatomy extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {difficulty, word} = this.props.charades;
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title>{difficulty} Words</Title>
        </Header>
        <View style={styles.mainView}>
          <Text style={styles.word}>
            {word}
          </Text>
          <Button primary large
                  title="Generate Word"
                  onPress={this.props.generateWord}
                  style={styles.centerButton}>
            <Text>
              Generate Word
            </Text>
          </Button>
        </View>
        <Footer >
          <FooterTab>
            <Button title="Easy" active={difficulty === "Easy"}
                    onPress={() => this.props.setDifficulty("Easy")}>
              <Text>
                Easy
              </Text>
              <Icon name="ios-stopwatch-outline"/>
            </Button>
            <Button title="Medium" active={difficulty === "Medium"}
                    onPress={() => this.props.setDifficulty("Medium")}>
              <Text>
                Medium
              </Text>
              <Icon name="ios-speedometer-outline"/>
            </Button>
            <Button title="Hard" active={difficulty === "Hard"}
                    onPress={() => this.props.setDifficulty("Hard")}>
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
  charades: state.charades
});

export default connect(mapStateToProps, bindAction)(Anatomy);
