import React, { Component } from 'react'
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native'
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import Loader from './Loader';


const WrapperContainer = ({
    barStyle="dark-content",
    StatusBarColor=colors.white,
    children,
    isLoading
}) => {
    return (
        <View style={styles.container}>
          <StatusBar  barStyle={barStyle} backgroundColor={StatusBarColor}/>
          <SafeAreaView style={{flex:1}}>
              {children}
          </SafeAreaView>
          <Loader isLoading={isLoading}/>
        </View>
    );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        padding:moderateScale(15),
    },


});

export default WrapperContainer;


