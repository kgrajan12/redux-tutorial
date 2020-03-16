import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { UNDO } from '../redux/action';
import _ from 'lodash/array';

class CompletedTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const { undo, toDo } = this.props;
      const completed = toDo.map((val, key) => val.completed ? { ...val, key } : undefined);
      const compact = _.compact(completed);
    return (
      <View>
          {compact.map((val, key) => ( // <- not this key
            <Text onPress={() => undo(val.key)} style={{ padding: 10, backgroundColor: '#aaa', color: '#fff', borderRadius: 5, margin: 5 }} key={key}>
              {val.text}
            </Text>
          ))}
      </View>
    );
  }
}

const matchStateToProps = ({ counter, textInput, toDo }) => ({
    counter,
    textInput,
    toDo,
  });

const matchStateToDispatch = dispatch => ({
    undo: (payload) => dispatch({ type: UNDO, payload })
});

export default connect(matchStateToProps, matchStateToDispatch)(CompletedTodo);
