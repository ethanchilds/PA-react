// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View,TextInput,RefreshControl } from 'react-native';

//import CountDown to show the timer
import CountDown from 'react-native-countdown-component';

//import moment to help you play with date and time
import moment from 'moment';
import TextBox from 'pregnancy310/assets/TextBox.js';
import Button from 'pregnancy310/assets/Button.js';

const App = () => {
  const [totalDuration, setTotalDuration] = React.useState(0);
  const [ expirydate, setExpiryDate] = React.useState()
  const [refreshing, setRefreshing] = React.useState(false);

  const refresh = () => window.location.reload(true)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const onChangeHandler = (event) => {
    setExpiryDate(event.target.value);
  };

  useEffect(() => {
    //We are showing the coundown timer for a given expiry date-time
    //If you are making a quize type app then you need to make a simple timer
    //which can be done by using the simple like given below
    //that.setState({ totalDuration: 30 }); //which is 30 sec
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC


    // var expirydate = '2020-12-23 04:00:45'; //You can set your own date-time


    //Let suppose we have to show the countdown for above date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Due in: 
        </Text>
        <CountDown
        // Total time to be displayed
          until={totalDuration}
          //duration of countdown in seconds
          timetoShow={('H', 'M', 'S')}
          // Format the countdown component
          digitStyle={{backgroundColor: '#15bf95'}}
          digitTxtStyle={{color: '#FFF'}}
          timeLabelStyle = {{color: '#000'}}
          separatorStyle = {{color: '#FFF'}}

          // Message once countdown ends
          onFinish={() => alert('Congrats!')}

          
          //on Press call
          size={25}
        />
        <Text></Text>
        <Text>Enter due date</Text>
        <TextInput
        style={styles.input}
        onChangeText={setExpiryDate}
        value={expirydate}
        placeholder = 'YYYY-MM-DD'
        />
        <Button text = ' Set Date'
        Pressed = {setRefreshing}/>
      </View>
    </SafeAreaView>
  );
};

export default countDown;

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
