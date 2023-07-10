
import React from 'react';
import { Button } from 'react-native-paper';
import Routes from './app/Navigations/Routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const  Stack =createNativeStackNavigator();


const App=() => {
  return (
    <View style={{flex:1}}>
      {Routes(Stack)}
    </View>
  );
      
};

export default App;
