import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Card} from './Card';
import {CardSection} from './CardSection';
import {Button} from './Button';
const Albumdetail = props => {
  //alert(JSON.stringify(props));
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            source={{uri: props.album.thumbnail_image}}
            style={{height: 100, width: 60}}
          />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text>{props.album.artist}</Text>
          <Text>{props.album.title}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{uri: props.album.image}}
          style={{height: 300, flex: 1, width: null}}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)} />
      </CardSection>
    </Card>
  );
};
export {Albumdetail};
