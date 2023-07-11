import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import navigationStrings from '../Constants/navigationStrings';

import MainStack from './MainStack';

import Home from './Home';


import {
  WelcomeScreen,
  SignUpScreen,
  LoginScreen,
  HomeScreen,
  MainScreen,
  ControlScreen,
  TrainScreen,
  BluetoothScreen,
  
  
  
} from '../Screens';





import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [isloggedin, setLogged] = useState(null);
  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      {
        setLogged(true);
      }
    } else {
      setLogged(false);
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={Home}
            options={{title: 'Home', headerShown: false}}
          />

        
          <Stack.Screen
            name={navigationStrings.WELCOMESCREEN}
            component={WelcomeScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.SIGNUPSCREEN}
            component={SignUpScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.LOGINSCREEN}
            component={LoginScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.MAINSCREEN}
            component={MainScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.CONTROLSCREEN}
            component={ControlScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.TRAINSCREEN}
            component={TrainScreen}
            options={{title: '', headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.BLUETOOTHSCREEN}
            component={BluetoothScreen}
            options={{title: '', headerShown: false}}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
