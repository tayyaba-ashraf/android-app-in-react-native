import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../Constants/navigationStrings';

import {
    
    ControlScreen,
    TrainScreen,
  
  } from '../Screens';

const Tab = createBottomTabNavigator();



const TabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName={navigationStrings.CONTROLSCREEN}>

      <Tab.Screen
        name={navigationStrings.CONTROLSCREEN}
        component={ControlScreen}
        options={{title: 'Control Robot', headerShown: false}}
      />
      <Tab.Screen
        name={navigationStrings.TRAINSCREEN}
        component={TrainScreen}
        options={{title: 'Train Robot', headerShown: false}}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

// export default TabRoutes;
