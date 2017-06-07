import React, {Component} from 'react';
import {Text, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {setCategory} from '../../../redux/actions-creators';

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
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory() {
    const {setCategory, category} = this.props;
    setCategory(category);
  }

  render() {
    const {category, currentCategory} = this.props;
    return (
      <Button title={category} active={currentCategory === category} onPress={this.setCategory}>
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

const bindActionToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category))
});

CategoryButton.propTypes = {
  setCategory: React.PropTypes.func,
  category: React.PropTypes.string,
  currentCategory: React.PropTypes.string
};
export default connect(mapStateToProps, bindActionToProps)(CategoryButton);
