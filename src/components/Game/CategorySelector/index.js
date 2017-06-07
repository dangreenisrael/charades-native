import React, {Component} from 'react';
import {Text, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {setCategory} from '../../../redux/actionsCreators';

const icon = category => {
  switch (category) {
    case 'Things':
      return 'ios-stopwatch-outline';
    case 'Movies':
      return 'ios-speedometer-outline';
    case 'Idioms':
      return 'ios-trophy-outline';
  }
};

export class CategoryButton extends Component {
  render() {
    const {category, currentCategory, setCategory} = this.props;
    return (
      <Button
        title={category}
        active={currentCategory === category}
        onPress={() => setCategory(category)}
      >
        <Text>
          {category}
        </Text>
        <Icon name={icon(category)} />
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  currentCategory: state.ui.category
});

export const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category))
});

CategoryButton.propTypes = {
  setCategory: React.PropTypes.func,
  category: React.PropTypes.string,
  currentCategory: React.PropTypes.string
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryButton);
