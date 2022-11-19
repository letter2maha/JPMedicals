import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function CalendarScreen() {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  return (
  <View style={styles.container}>
  
  <Calendar style ={[styles.calendar, {width: 350}]}
  markingType={'multi-dot'}
  markedDates={{
    '2022-11-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
    '2022-11-24': {dots: [massage, workout], disabled: true}
  }} />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%'
  },
  calendar:{
    margin:20,
   borderRadius:10,
   elevation:4,
  
  }
});
