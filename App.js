import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
//import reducers from './src/reducers'
import Calendar from './src/views/Calendar'; //Calender Screen
import Register from './src/views/Register'; //Register screen
const Stack = createStackNavigator();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Register"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Calendar" component={Calendar} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
