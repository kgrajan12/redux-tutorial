import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main';
import CompletedTodo from '../screens/completedTodo';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createBottomTabNavigator();

export default class TabNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <NavigationContainer>
                <Navigator>
                    <Screen name='To-Do' component={Main} />
                    <Screen name='Completed To-Do' component={CompletedTodo} />
                </Navigator>
            </NavigationContainer>
        );
    }
}
