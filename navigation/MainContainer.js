import * as React from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image, View, Text } from 'react-native'
//screens 
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import TimesheetScreen from './screens/TimesheetScreen'
import CalendarScreen from './screens/CalendarScreen'
import JobScreen from './screens/JobScreen'
//Screen names;
const homeName ="Home";
const timesheetName ="Timesheet";
const settingName ="Setting";
const calendarName="Calendar"
const jobName="Job";
const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={[({route})=>({
                    tabBarIcon:({focused,color,size}) =>{
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName){
                            iconName = focused? 'home': 'home-outline'
                        }
                        else if(rn === timesheetName){
                            iconName = focused? 'list': 'list-outline'
                        }
                        else if (rn === settingName){
                            iconName = focused? 'settings': 'settings-outline'
                        }
                        else if(rn === calendarName){
                            iconName = focused? 'calendar': 'calendar-outline'
                        }
                        else if(rn === jobName){
                            iconName =focused? 'md-flash-sharp': 'md-flash-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }), {
                    "tabBarActiveTintColor": "purple",
                    "tabBarInactiveTintColor": "grey",
                    "tabBarLabelStyle": {
                      "paddingBottom": 10,
                      "fontSize": 10
                    },
                    "tabBarStyle": [
                      {
                        "display": "flex"
                      },
                      null
                    ]
                  }]}
                // tabBarOptions = {{
                //     activeTintColor: 'purple',
                //     inactiveTintColor: 'grey',
                //     labelStyle: {paddingBottom:10, fontSize:10},
                //     style: {padding:10, height:70}
                // }}


            >
            <Tab.Screen name={homeName} component={HomeScreen} options={{headerTitle: (ele)=>{return( <Image source={require('../assets/JPMedicalIcon.png')} style={{height:50,width:50}}/>)}}} />
            <Tab.Screen name={calendarName} component={CalendarScreen} options={{headerTitle: (ele)=>{return( <Image source={require('../assets/JPMedicalIcon.png')} style={{height:50,width:50}}/>)}}} />
            <Tab.Screen name={jobName} component={JobScreen} options={{headerTitle: (ele)=>{return( <Image source={require('../assets/JPMedicalIcon.png')} style={{height:50,width:50}}/>)}}} />
            <Tab.Screen name={timesheetName} component={TimesheetScreen} options={{headerTitle: (ele)=>{return( <Image source={require('../assets/JPMedicalIcon.png')} style={{height:50,width:50}}/>)}}} />
            <Tab.Screen name={settingName} component={SettingScreen} options={{headerTitle: (ele)=>{return( <Image source={require('../assets/JPMedicalIcon.png')} style={{height:50,width:50}}/>)}}} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}