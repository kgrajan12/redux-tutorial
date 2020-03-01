import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { ADD, SUBTRACT, UPDATE } from '../redux/action';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { props, state } = this; // there is nothing state only props that is redux
        // const { text, counter } = state;
        const { counter, textInput, add, subtract, update } = props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between', alignItems:'center', marginBottom: 100 }}>
                    <Text style={button} onPress={subtract}>-</Text>
                    <Text style={{}}>{counter}</Text>
                    <Text style={button} onPress={add}>+</Text>
                </View>
                <TextInput
                    placeholder='Please type here...'
                    underlineColorAndroid='#777'
                    style={{ width: '70%', fontSize: 20 }}
                    onChangeText={update}
                    value={textInput}
                />
            </View>
        );
    }
}

const matchStateToProps = ({ counter, textInput }) => ({ counter, textInput });
const matchDispatchToProps = dispatch => ({
    add: () => dispatch({ type: ADD }),
    subtract: () => dispatch({ type: SUBTRACT }),
    update: payload => dispatch({ type: UPDATE, payload })
});

export default connect(matchStateToProps, matchDispatchToProps)(Main);

const button = {
    height: 60,
    width: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
    fontSize: 25
};
