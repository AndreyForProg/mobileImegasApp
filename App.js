import React, {Component} from 'react';
import MainPage from './src/MainPage';
import Detail from './src/Detail';
import reducers from './src/redux/redux-store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

const Stack = createStackNavigator();

export const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          title: 'Images',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: 'Image',
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>{this.createHomeStack()}</NavigationContainer>
      </Provider>
    );
  }
}
