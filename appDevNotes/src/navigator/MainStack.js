import React from "react";
import ListScreen from '../pages/ListScreen'
import EditNote from '../pages/EditNote'
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from '@react-navigation/stack';
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator screenOptions={{
       
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#222'
        },
        headerTintColor: '#fff'
        
      }}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="EditNote" component={EditNote}  />
        
        

      </Stack.Navigator>
      
   
  );
}

export default MyStack