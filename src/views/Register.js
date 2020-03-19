import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Picker,
  Alert,
} from 'react-native';
import {Header, Card, CardSection, Button} from '../components';
export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      gender: 'Gender',
      dob: '',
      sport:'',
      city: 'City',
    };
  }
  handleValueChange = item => {
    if (item !== 'Gender') {
      this.setState({
        gender: item,
      });
    }
  };
  handleValueChange2 = item => {
    if (item !== 'City') {
      this.setState({
        city: item,
      });
    }
  };
  handle = () => {
    const {fname, lname, city, dob, gender} = this.state;
    //alert(JSON.stringify(fname))
    let data = {
      fname: this.state.fname,
      lname: this.state.lname,
      gender: this.state.gender,
      dob: this.state.dob,
      city: this.state.city,
      sport:this.state.sport
    };
    this.props.navigation.navigate('Calendar', {screen1: data});
  };
  render() {
    return (
      <ScrollView>
        <Header
          name="Registration Form"
          navigation={this.props.navigation}
          containerstyle={{backgroundColor: '#a69d9d'}}
          headertextstyle={{fontSize: 20, color: '#ffff'}}
        />
        <Card>
          <TextInput
            placeholder="First Name"
            value={this.state.fname}
            onChangeText={fname => this.setState({fname})}
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 5,
              fontSize: 18,
            }}
          />
          <TextInput
            placeholder="Last Name"
            value={this.state.lname}
            onChangeText={lname => this.setState({lname})}
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 5,
              fontSize: 18,
            }}
          />
        </Card>
        <View style={styles.style1}>
          <Picker
            selectedValue={this.state.gender}
            style={{width: '100%', height: 30}}
            onValueChange={item => this.handleValueChange(item)}>
            <Picker.Item label="Gender" value="Gender" color="grey" />
            <Picker.Item label="Male" value="Male" color="grey" />
            <Picker.Item label="Female" value="Female" color="grey" />
            <Picker.Item label="Other" value="Other" color="grey" />
          </Picker>
        </View>
        <View style={styles.style1}>
          <TextInput
            placeholder="Date of Birth (MM/DD/YYYY)"
            style={{fontSize: 16}}
            onChangeText={text => this.setState({dob: text})}
          />
        </View>
        <View style={styles.style1}>
          <Picker
            selectedValue={this.state.city}
            style={{width: '100%', height: 30}}
            onValueChange={item => this.handleValueChange2(item)}>
            <Picker.Item label="City" value="City" color="grey" />
            <Picker.Item label="Bangalore" value="Bangalore" color="grey" />
            <Picker.Item label="Chennai" value="Chennai" color="grey" />
            <Picker.Item label="Hyderabad" value="Hyderabad" color="grey" />
          </Picker>
        </View>
        <View style={styles.style2}>
          <Text style={{color: 'grey', fontSize: 15, margin: 10}}>
            Add Your Sports
          </Text>
          <TextInput
            //placeholder="Last Name"
           // value={this.state.lname}
            onChangeText={sport => this.setState({sport})}
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 5,
              fontSize: 18,
            }}
          />
          
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                margin: 10,
                fontWeight: '200',
              }}>
              Add More
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginBottom: 5,
          }}>
          <Button
            style={styles.buttonStyle}
            onPress={() => this.handle()}
            title="Done"
            buttonText={{color: 'white', fontSize: 18}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  style1: {
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  style2: {
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'column',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: '#f2f2f2',
    backgroundColor: '#fff',
  },
  horizontalBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%',
  },
  buttonStyle: {
    borderRadius: 25,
    width: 150,
    elevation: 2,
    height: 50,
    backgroundColor: 'grey',
  },
});
export default Register;
