import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import navigationStrings from '../Constants/navigationStrings';
import TabRoutes from './TabRoutes';



const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen
      name={navigationStrings.TAB}
      component={TabRoutes}

      />

    
    </>
  );
};



const styles = StyleSheet.create({

});

// export default MainStack;