import React from 'react'
import { useState } from 'react';
import {  Text, View,Image,TouchableOpacity,ScrollView } from 'react-native'

//constants
import imagePaths from '../../../Constants/imagePaths';
import english from '../../../Constants/language/english';
import navigationStrings from '../../../Constants/navigationStrings';
//reusable Components
import WrapperContainer from '../../../Components/WrapperContainer';
import Header from '../../../Components/Header';
import ButtonComponent from '../../../Components/ButtonComponent';
//styles.js from ControlScreen folder
import styles from './styles';
//styles folder
import colors from '../../../styles/colors';



const ControlScreen = ({navigation}) => {

  
    const moveToscreen = (screen) => () => {
        navigation.navigate(screen);
      };
    const [state, setstate] = useState({
        isLoading: false,
        isEnable:false,
      });
    
      const { isLoading } = state;
      

      return (
        <WrapperContainer isLoading={isLoading}>
            <Header/>
            <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.headingText} >{english.CONTROLL_ROBOT}</Text>
                
                <ButtonComponent
                    btnText={english.BACK_TO_BLUETOOTH}
                    btnStyle={{ backgroundColor: colors.Ebony,borderRadius:10,width:200,marginBottom:20,  marginTop:40}}
                    onPress={moveToscreen(navigationStrings.BLUETOOTHSCREEN)}
                />
                
                <ButtonComponent
                    btnText={english.BACK_TO_MAIN}
                    btnStyle={{ backgroundColor: colors.Metallic_Silver,borderRadius:10,width:200}}
                    onPress={moveToscreen(navigationStrings.MAINSCREEN)}
                />

              
             
                

            </View>
            </ScrollView>
        </WrapperContainer>
                
                
                
                
      );
};

export default ControlScreen;