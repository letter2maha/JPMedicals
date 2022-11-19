import * as React from "react";
import { View, Text, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { Avatar, Card, IconButton, Paragraph, Title, DataTable } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SettingScreen({ navigation }) {
  return (
    
    <ScrollView >
    
    <TouchableOpacity onPress={()=>{console.log("press")}}>
       <Card.Title
         style={{ backgroundColor: '#ffff', margin:20, borderRadius: 10,  borderWidth: 1,  borderColor: '#fff',}}
         title="Sheldon Cooper"
         subtitle="Staff Nurse"
         left={(props) => <Avatar.Icon {...props} icon="folder" />} 
         /> 
    </TouchableOpacity>
  
      <View style={{backgroundColor: '#ffff', margin:20, borderRadius: 10,  borderWidth: 1,  borderColor: '#fff', display:"flex", alignItems:"center"}}>

          {/* <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
            <Ionicons name="card" style={{margin:20, fontSize:40}}/>
            <Text style={{flex:1}}>View ID Card</Text>
            <Ionicons name="arrow-forward-circle-outline" style={{margin:20, fontSize:40}}/>
          </View> */}

          <View style ={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            <Ionicons name="card" style={{margin:20, fontSize:40}}/>
            <Text style={{flex:1}}>View ID Card</Text>
            <Ionicons name="arrow-forward-circle-outline" style={{margin:20, fontSize:40}}/>
          </View>
      </View>
        <View style={{backgroundColor: '#ffff', margin:20, borderRadius: 10,  borderWidth: 1,  borderColor: '#fff'}}>
          <View style ={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            <Ionicons name="eye-off-outline" style={{margin:20, fontSize:40}}/>
            <Text>Terms of Service</Text>
          </View>
          <View style ={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            <Ionicons name="eye-off-outline" style={{margin:20, fontSize:40}}/>
            <Text>Privacy</Text>
          </View>
          <View style ={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            <Ionicons name="eye-off-outline" style={{margin:20, fontSize:40}}/>
            <Text>Send feedback</Text>
          </View>
          <View style ={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            <Ionicons name="eye-off-outline"  style={{margin:20,fontSize:40}}/>
            <Text>Rate on App store</Text>
          </View> 
          
        </View> 
         
    </ScrollView>
    
  );

  
}
