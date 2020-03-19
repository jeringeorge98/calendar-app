import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Header, Card, CardSection, Button} from '../components';
import {Calendar, Agenda} from 'react-native-calendars';
import TimePicker from 'react-native-modal-datetime-picker';
//import TimePicker from 'react-native-24h-timepicker';
import Moment from 'moment';

import Icon from 'react-native-vector-icons/AntDesign';
export class Calendars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_time: 'Start Time',
      visible: false,
      endtime: 'End Time',
    };
  }
  handleDayPress = date => {
    console.log(date);
  };
  hideTimePicker = () => {
    this.setState({
      visible: false,
    });
  };
  handleTimePicked = start => {
    this.setState({
      start_time: Moment(start).format('LT'),
    });
    this.hideTimePicker();
  };
  hideTimePicker2 = () => {
    this.setState({
      visible2: false,
    });
  };
  handleTimePicked2 = end => {
    this.setState({
      endtime: Moment(end).format('LT'),
    });
    this.hideTimePicker2();
  };

  render() {
    return (
      <ScrollView>
        <Header
          name="Date & Time"
          containerstyle={{backgroundColor: '#a69d9d'}}
          headertextstyle={{fontSize: 20, color: '#ffff'}}
        />
        <View style={styles.style1}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <Icon name="bars" size={20} />
            <Text style={{fontSize: 16, color: '#bab8b8'}}>When?</Text>
          </View>
          <View
            style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Icon name="down" size={20} />
          </View>
        </View>
        <Card style={{marginBottom: 10, height: 300}}>
          <Agenda
            // the list of items that have to be displayed in agenda. If you want to render item as empty date
            // the value of date key kas to be an empty array []. If there exists no value for date key it is
            // considered that the date in question is not yet loaded
            items={this.props.planList}
            renderItem={(item, firstItemInDay) =>
              this.renderItem(item, firstItemInDay)
            }
            style={{height: '50%'}}
            renderDay={(day, item) => this.renderItemDay(day, item)}
            renderEmptyDate={() => this.renderEmptyDate()}
            rowHasChanged={(r1, r2) => this.rowHasChanged(r1, r2)}
            // onDayPress={this.onDaySelected.bind(this)}
            // minDate={
            //   this.props.minDate
            //     ? this.props.minDate
            //     : Moment(today).format('YYYY-MM-DD')
            // }
            // maxDate={
            //   this.props.maxDate
            //     ? this.props.maxDate
            //     : Moment(today).format('YYYY-MM-DD')
            // }
            renderKnob={() => {
              return (
                <View style={{height: 14, padding: 4}}>
                  <View
                    style={{
                      height: '100%',
                      width: 40,
                      backgroundColor: 'black',
                      borderRadius: 4,
                      borderWidth: 1,
                      borderColor: '#DCDCDC',
                    }}
                  />
                </View>
              );
            }}
            markedDates={this.props.markedDates}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: 'white',
              selectedDayBackgroundColor: '#E0D2BC',
              selectedDayTextColor: '#000000',
              todayTextColor: '#000000',
              textDisabledColor: '#888888',
              dayTextColor: '#000000',
              agendaKnobColor: '#DCDCDC',
              dotColor: 'green',
              selectedDotColor: 'blue',
              'stylesheet.calendar.header': {
                week: {
                  marginTop: Platform.OS == 'ios' ? 6 : 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              },
            }}
          />
          {/*<Calendar
            hideArrows={false}
            renderArrow={direction =>
              direction === 'left' ? (
                <Icon name="left" size={15} />
              ) : (
                <Icon name="right" size={15} />
              )
            }
            onDayPress={day => {
              this.handleDayPress(day);
            }}
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
          />*/}
        </Card>
        <TouchableOpacity
          style={styles.style1}
          onPress={() => this.setState({visible: true})}>
          <Text>{this.state.start_time}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.style1}
          onPress={() => this.setState({visible2: true})}>
          <Text>{this.state.endtime}</Text>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.visible}
          onConfirm={this.handleTimePicked}
          onCancel={this.hideDatePicker}
          is24Hour={false}
          //minimumDate={new Date(this.state.validateStart)}
          mode="time"
        />
        <TimePicker
          isVisible={this.state.visible2}
          onConfirm={this.handleTimePicked2}
          onCancel={this.hideDatePicker2}
          is24Hour={false}
          //minimumDate={new Date(this.state.validateStart)}
          mode="time"
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginBottom: 5,
          }}>
          <Button
            style={styles.buttonStyle}
            onPress={() => alert('register')}
            title="Save"
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
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: '#f2f2f2',
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonStyle: {
    borderRadius: 25,
    width: 150,
    elevation: 2,
    height: 50,
    backgroundColor: 'grey',
  },
});
export default Calendars;
