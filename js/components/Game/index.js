import React, {Component} from 'react';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import ShowWord from './ShowWorld';
import {View, Container, Header, Title, Footer, FooterTab} from 'native-base';
import CategorySelector from './CategorySelector';
import GenerateWord from './GenerateWord';
class Game extends Component {
  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Title style={styles.headerTitle}>Charades</Title>
        </Header>
        <View style={styles.main}>
          <ShowWord />
          <View style={styles.generateWord}>
            <GenerateWord />
          </View>
        </View>
        <Footer>
          <FooterTab>
            <CategorySelector category="Things" />
            <CategorySelector category="Movies" />
            <CategorySelector category="Idioms" />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Game;
