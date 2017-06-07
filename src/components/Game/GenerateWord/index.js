import React, {Component} from 'react';
import {connect} from 'react-redux';
import pluralize from 'pluralize';
import {generateWordAndSetAsCurrent} from '../../../redux/thunks';
import {getCategory} from '../../../redux/selectors';
import {Text, Button} from 'native-base';

export class GenerateWord extends Component {
  render() {
    const category = pluralize.singular(this.props.category);
    const {generateWord} = this.props;
    return (
      <Button title="Generator" large onPress={generateWord} style={{alignSelf: 'center'}}>
        <Text>
          Generate {category}
        </Text>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  category: getCategory(state)
});

export const mapDispatchToProps = dispatch => ({
  generateWord: () => dispatch(generateWordAndSetAsCurrent())
});

GenerateWord.propTypes = {
  generateWordAndSetAsCurrent: React.PropTypes.func,
  category: React.PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateWord);
