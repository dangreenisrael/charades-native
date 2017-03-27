import React, {Component} from 'react';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import ShowWord from './ShowWorld';
import {
  View, Container, Header, Title, Text, Button, Icon, Footer, FooterTab
} from 'native-base';
import DifficultyButton from './DifficultyButton';
import GenerateWord from  './GenerateWord';
class Game extends Component {
  render() {
    const {currentDifficulty} = this.props;
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title style={styles.headerTitle}>{currentDifficulty} Words</Title>
        </Header>
        <View style={styles.mainView}>
          <ShowWord/>
          <GenerateWord/>
        </View>
        <Footer >
          <FooterTab>
            <DifficultyButton difficulty="Easy"/>
            <DifficultyButton difficulty="Medium"/>
            <DifficultyButton difficulty="Hard"/>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
  
}

export default Game;
