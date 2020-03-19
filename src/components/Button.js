import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={{...props.style,justifyContent:'center',alignItems:'center'}} onPress={() => props.onPress()}>
      <Text style={{...props.buttonText}}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  buttoncontainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 5,
    borderRadius: 2,
    borderColor: 'blue',
    marginLeft: 5,
    marginTop: 5,
    alignItems: 'center',
  },
};
export {Button};
