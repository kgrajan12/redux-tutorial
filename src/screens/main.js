/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { ADD, SUBTRACT, UPDATE, ADD_TODO, COMPLETE } from '../redux/action';
import _ from 'lodash/array';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: '',
    };
  }

  //   render() {
  //     const {props, state} = this; // there is nothing state only props that is redux
  //     // const { text, counter } = state;
  //     const {counter, textInput, add, subtract, update} = props;
  //     return (
  //       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             width: '60%',
  //             justifyContent: 'space-between',
  //             alignItems: 'center',
  //             marginBottom: 100,
  //           }}>
  //           <Text style={button} onPress={subtract}>
  //             -
  //           </Text>
  //           <Text style={{}}>{counter}</Text>
  //           <Text style={button} onPress={add}>
  //             +
  //           </Text>
  //         </View>
  //         <TextInput
  //           placeholder="Please type here..."
  //           underlineColorAndroid="#777"
  //           style={{width: '70%', fontSize: 20}}
  //           onChangeText={update}
  //           value={textInput}
  //         />
  //       </View>
  //     );
  //   }

  render() {
    const { state, props } = this;
    const { payload } = state;
    const { toDo, addToDo, complete } = props;
    const notCompleted = toDo.map((val, key) => !val.completed ? { ...val, key } : undefined);
    const compact = _.compact(notCompleted);
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
          }}>
          <TextInput
            placeholder="Please text here..."
            style={{ flex: 1 }}
            onChangeText={payload => this.setState({ payload })}
            value={payload}
          />
          <Text onPress={() => {
              addToDo({ text: payload, completed: false });
              this.setState({ payload: '' });
            }} style={{ color: '#fff', backgroundColor: '#aaa', paddingHorizontal: 20, padding: 15, textAlignVertical: 'center' }}>
            ADD
          </Text>
        </View>
        <ScrollView>
          {compact.map((val, key) => (
            <Text onPress={() => complete(val.key)} style={{ padding: 10, backgroundColor: '#aaa', color: '#fff', borderRadius: 5, margin: 5 }} key={key}>
              {val.text}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const matchStateToProps = ({ counter, textInput, toDo }) => ({
  counter,
  textInput,
  toDo,
});
const matchDispatchToProps = dispatch => ({
  add: () => dispatch({ type: ADD }),
  subtract: () => dispatch({ type: SUBTRACT }),
  update: payload => dispatch({ type: UPDATE, payload }),
  addToDo: payload => dispatch({ type: ADD_TODO, payload }),
  complete: payload => dispatch({ type: COMPLETE, payload })
});

export default connect(
  matchStateToProps,
  matchDispatchToProps,
)(Main);

const button = {
  height: 60,
  width: 60,
  textAlign: 'center',
  textAlignVertical: 'center',
  backgroundColor: '#ccc',
  borderRadius: 50,
  fontSize: 25,
};
