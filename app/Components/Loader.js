import React from 'react'
import { StyleSheet, Text, View,ActivityIndicator,Modal } from 'react-native'


const Loader = ({isLoading=false}) => {
    if(isLoading){
    return (
        <Modal transparent>
            <View style={styles.loaderStyle}>
                <ActivityIndicator color="red" size={24}/>
            </View>
        </Modal>
    );
    }
    return null;
};


const styles = StyleSheet.create({
    loaderStyle:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(0,0,0,0.3)'

    

    },


});
export default Loader;




