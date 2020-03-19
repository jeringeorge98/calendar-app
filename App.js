import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Calendar from './src/views/Calendar'; //Calender Screen
import Register from './src/views/Register'; //Register screen
export class App extends Component {
  render() {
    return <Calendar />;
  }
}

export default App;
