import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
const Header = props => {
  return (
    <View
      style={{
        ...props.containerstyle,
        elevation: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          //backgroundColor: 'black',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
         <Icon
          name="arrowleft"
          color="#000"  
          size={20}
         />
        <Text style={{...props.headertextstyle, fontWeight: 'bold'}}>
          {props.name}
        </Text>
        <Icon
          name="arrowright"
          color="#000"
          size={20}  
         />
      </View>
    </View>
  );
};

export {Header};
