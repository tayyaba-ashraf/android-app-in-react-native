import React, {useEffect, useState} from 'react';
import {View, Text,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import navigationStrings from '../Constants/navigationStrings';
import imagePaths from '../Constants/imagePaths';



import {
  
  HomeScreen,
  MainScreen,
  ControlScreen,
  BluetoothScreen,
 
} from '../Screens';
import colors from '../styles/colors';




const Tab = createBottomTabNavigator();

//Home
function Home () {
  return (
    <Tab.Navigator 
    initialRouteName={navigationStrings.HOMESCREEN}
    screenOptions={{
      tabBarActiveTintColor :colors.Dark_Pink,
      tabBarInactiveBackgroundColor:colors.Silver,
    }}

    >

      <Tab.Screen
        name={navigationStrings.HOMESCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon:({focused}) =>{
            return(
              <Image style={{tintColor : focused ? colors.BlackOpacity20:colors.Brown}} source={imagePaths.homeIcon}/>
            )

          },
          title: 'HOME',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={navigationStrings.MAINSCREEN}
        component={MainScreen}
        options={{
          tabBarIcon:({focused}) =>{
            return(
              <Image style={{tintColor : focused ? colors.BlackOpacity20:colors.Brown}} source={imagePaths.mainIcon}/>
            )

          },
          title: 'MAIN',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={navigationStrings.CONTROLSCREEN}
        component={ControlScreen}
        options={{
          tabBarIcon:({focused}) =>{
            return(
              <Image style={{tintColor : focused ? colors.BlackOpacity20:colors.Brown}} source={imagePaths.microPhoneIcon}/>
            )

          },

          title: 'CONTROL',
          headerShown: false
        }}
      />
     
      <Tab.Screen
        name={navigationStrings.BLUETOOTHSCREEN}
        component={BluetoothScreen}
        options={{
          tabBarIcon:({focused}) =>{
            return(
              <Image style={{tintColor : focused ? colors.BlackOpacity20:colors.Brown}} source={imagePaths.BluetoothIcon}/>
            )

          },

          title: 'BLUETOOTH',
          headerShown: false
        }}
      />

    </Tab.Navigator>
  );
};
export default Home;