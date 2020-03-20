import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {Header, Card, CardSection, Button} from '../components';
import {Calendar, Agenda} from 'react-native-calendars';
import {connect} from 'react-redux';
import {addbooking} from '../redux/actions';
import TimePicker from 'react-native-modal-datetime-picker';
//import TimePicker from 'react-native-24h-timepicker';
import Moment from 'moment';

import Icon from 'react-native-vector-icons/AntDesign';
const mapStatetoProps = state => {
  return {
    day: state.addbookings.day,
    bookingdata: state.addbookings.booking_data,
  };
};
class Calendars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_time: 'Start Time',
      visible: false,
      endtime: 'End Time',
      items: {},
      day: '',
      screen1: {},
    };
    //console.log(props);
  }

  // handleDayPress = date => {
  //   this.setState({
  //     items: date,
  //   });
  //   //console.log('date pressed',it)
  // };
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
  // renderItem = (item, firstItemInDay) => {
  //   console.log(item, firstItemInDay);
  //   <Card>
  //     <Text>hello</Text>
  //   </Card>;
  // };
  componentDidMount() {
    const {screen1} = this.props.route.params;
    this.setState({
      screen1,
    });
    alert(JSON.stringify(screen1));
  }
  handleDayPress = date => {
    this.setState({
      day: this.timeToString(date.timestamp),
    });
    Alert.alert('Date selected');
    //his.state.items[strtime].push()
  };
  loadItems = day => {
    //console.log(day, 'month');
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        const d = this.state.day;
        console.log(strTime, 'converted');
        console.log(d.toISOString);
        if (strTime == this.state.day)
          console.log(this.state.items[strTime], 'items');
        // if (!this.state.items[strTime]) {
        //   this.state.items[strTime] = [];
        //   const numItems = Math.floor(Math.random() * 5);
        //   for (let j = 0; j < numItems; j++) {
        //     this.state.items[strTime].push({
        //       name: 'Item for ' + strTime + ' #' + j,
        //       height: Math.max(50, Math.floor(Math.random() * 150)),
        //     });
        //   }
        // }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
    // console.log(this.state.items);
  };

  renderItem = item => {
    return (
      <TouchableOpacity style={styles.style2} onPress={() => alert(item.name)}>
        <Text>{item.name}</Text>
        <Text>User:{item.User}</Text>
        <Text>Gender:{item.gender}</Text>
        <Text>CITY:{item.city}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString = time => {
    console.log(time, 'time');
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
  handleSave = () => {
    const {screen1} = this.state;
    const content = {
      name:
        'Booking for ' +
        this.state.day +
        '' +
        'from' +
        this.state.start_time +
        '' +
        'to' +
        this.state.endtime,
      start_time: this.state.start_time,
      endtime: this.state.endtime,
      User: screen1.fname + screen1.lname,
      gender: screen1.gender,
      sport: screen1.sport,
      city: screen1.city,
    };
    this.props.addbooking(content, this.state.day);
    // this.state.items[this.state.day] = [];
    // this.state.items[this.state.day].push({
    //   name:
    //     'Booking for ' +
    //     this.state.day +
    //     '' +
    //     'from' +
    //     this.state.start_time +
    //     '' +
    //     'to' +
    //     this.state.endtime,
    //   start_time: this.state.start_time,
    //   endtime: this.state.endtime,
    //   User: screen1.fname + screen1.lname,
    //   gender: screen1.gender,
    //   sport: screen1.sport,
    //   city: screen1.city,
    // });
    Alert.alert('booking done');
    this.setState({});
  };
  renderEmpty = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: '#a69d9d'}}>No Bookings!!</Text>
      </View>
    );
  };
  render() {
    console.log(this.props);
    return (
      <ScrollView>
        <Header
          name="Date & Time"
          navigation={this.props.navigation}
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
            items={this.props.bookingdata}
            //selected={'2017-05-16'}
            // loadItemsForMonth={this.loadItems}
            renderItem={this.renderItem}
            onDayPress={this.handleDayPress}
            renderEmptyDate={this.renderEmptyDate}
            renderEmptyData={this.renderEmpty}
            rowHasChanged={this.rowHasChanged}
            //refreshing={false}
            // refreshControl={null}
            onRefresh={() => console.log('refreshing...')}
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
            // renderKnob={() => {
            //   return (
            //     <View style={{height: 14, padding: 4}}>
            //       <View
            //         style={{
            //           height: '100%',
            //           width: 40,
            //           backgroundColor: 'black',
            //           borderRadius: 4,
            //           borderWidth: 1,
            //           borderColor: '#DCDCDC',
            //         }}
            //       />
            //     </View>
            //   );
            // }}
            // markedDates={this.props.markedDates}
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
          onCancel={this.hideTimePicker}
          is24Hour={false}
          //minimumDate={new Date(this.state.validateStart)}
          mode="time"
        />
        <TimePicker
          isVisible={this.state.visible2}
          onConfirm={this.handleTimePicked2}
          onCancel={this.hideTimePicker2}
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
            onPress={() => this.handleSave()}
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
  style2: {
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'column',
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
export default connect(mapStatetoProps, {addbooking})(Calendars);
