import React from 'react';
import {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

//constants
import imagePaths from '../../../Constants/imagePaths';
import english from '../../../Constants/language/english';

import navigationStrings from '../../../Constants/navigationStrings';
//reusable Components
import WrapperContainer from '../../../Components/WrapperContainer';
import Header from '../../../Components/Header';
import ButtonComponent from '../../../Components/ButtonComponent';
//styles.js from trainScreen folder
import Trainstyles from './Trainstyles';
import colors from '../../../styles/colors';
// import voice from "@react-native-community/voice";

// // Third party pacakges
// import { AudioRecorder,AudioUtils } from "react-native-audio";

import { Linking } from 'react-native';

const TrainScreen = ({navigation}) => {

  const moveToscreen = (screen) => () => {
    navigation.navigate(screen)
  }
  const OpenAppAsService =  () => {
    // Linking.canOpenURL('https://play.google.com/store/apps/details?id=BTVoiceControlforArduino.com&hl=en')
    Linking.canOpenURL('https://play.google.com/store/')
    .then(supported => {      
      if (supported) { 
        Linking.openURL('https://play.google.com/store/apps/');   
      } 
      else { 
        alert("sorry invalid url");    
      }
  })
}


  
  const [state, setstate] = useState({
    isLoading: false,
  });

  const {isLoading} = state;

  return (
    <WrapperContainer isLoading={isLoading}>
      <Header />
      <ScrollView>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={Trainstyles.headingText}>{english.TRAIN_ROBOT}</Text>
          {/* <Text style={Trainstyles.Text}>start Training of Robo Car</Text> */}
          
          <ButtonComponent
            btnText={english.BACK_TO_MAIN}
            btnStyle={{
              backgroundColor: colors.Metallic_Silver,
              borderRadius: 10,
              width: 200,
              marginBottom:20,
            }}
            onPress={moveToscreen(navigationStrings.MAINSCREEN)}
          />
          
          <ButtonComponent
            btnText={english.OPEN_APP_AS_SERVICE}
            btnStyle={{
              backgroundColor: colors.BlackOpacity20,
              borderRadius: 10,
              width: 200,
            }}
            onPress={OpenAppAsService}
          />

        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default TrainScreen;
