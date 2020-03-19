import React from 'react';
import {View, Text} from 'react-native';

const Card = props => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2,
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        ...props.style,
      }}>
      {props.children}
    </View>
  );
};
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 2,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5,
  },
};
export {Card};
