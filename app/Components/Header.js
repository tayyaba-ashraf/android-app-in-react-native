import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import imagePaths from '../Constants/imagePaths'
import { moderateScale } from '../styles/responsiveSize';

const Header = ({
    Img=imagePaths.backIcon,
    onPress,
    headerStyle
}) => {

     const navigation=useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
            <TouchableOpacity
            onPress={!!onPress? !onPress: () => navigation.goBack()}
            >
            <Image source={Img}/>
            </TouchableOpacity>
                

            
        </View>
    );
};



const styles = StyleSheet.create({

        headerStyle:{
            minHeight:moderateScale(48),




    },
    


});



export default Header;