import React from 'react';
import {View, Text} from 'react-native';

const CardSection = props => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
      }}>
      {props.children}
    </View>
  );
};
export {CardSection};
