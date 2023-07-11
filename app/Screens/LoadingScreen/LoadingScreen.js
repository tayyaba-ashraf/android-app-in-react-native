import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
//styles
import colors from '../../styles/colors'




const LoadingScreen = () => {
  return (
    <View style={styles.LoadingContainer}>
     <ActivityIndicator size="large" color={colors.Davy_Grey}></ActivityIndicator>
    </View>
  );
};



const styles = StyleSheet.create({
    LoadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }

});
 export default LoadingScreen;