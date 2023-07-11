import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import navigationStrings from '../Constants/navigationStrings';



import {
    
    ControlScreen,
    
    BluetoothScreen,
  
    
 
} from '../Screens';





//Control
function Control () {
const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={navigationStrings.CONTROLSCREEN}>

      <Tab.Screen
        name={navigationStrings.CONTROLSCREEN}
        component={ControlScreen}
        options={{title: 'Control', headerShown: false}}
      />
     
       <Tab.Screen
        name={navigationStrings.BLUETOOTHSCREEN}
        component={BluetoothScreen}
        options={{title: 'Bluetooth', headerShown: false}}
      />

    </Tab.Navigator>
  );
};
// export default Control;