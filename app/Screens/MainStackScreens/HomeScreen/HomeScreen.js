import React from "react";
import { useState } from "react";
import { Text, View, ScrollView, Button, TouchableOpacity ,SafeAreaView,Image} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

/*import Screens*/
import {MainScreen} from '../MainScreen';

//import reusableComponents
import WrapperContainer from "../../../Components/WrapperContainer";
import Header from "../../../Components/Header";
import ButtonComponent from "../../../Components/ButtonComponent";


//constants
import english from "../../../Constants/language/english";
import styles from "./styles";
import navigationStrings from "../../../Constants/navigationStrings";
import colors from "../../../styles/colors";
import imagePaths from "../../../Constants/imagePaths";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Third party pacakage
import AsyncStorage from '@react-native-community/async-storage';




const HomeScreen = (props) => {


  const moveToscreen = (screen) => () => {
    navigation.navigate(screen);
  };
  const [state, setstate] = useState({
    isLoading: false,
  });

  const { isLoading } = state;

  const logout = props => {
    AsyncStorage.removeItem('token').then(() => {
      props.navigation.navigate('WelcomeScreen');
    });
  };
  
  const Img=imagePaths.homeIcon;
  
  return (
    <WrapperContainer isLoading={isLoading}>
      <ScrollView>
        <Image source={Img}/>
        
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.headingText}>{english.WELCOME_HOME}</Text>
            
            <SafeAreaView style={{flexDirection: "column",justifyContent: "space-evenly",width: 200,marginRight:50}}>
            <ButtonComponent
              btnText={english.MAIN}
              btnStyle={{ backgroundColor:colors.Metallic_Silver,borderRadius: 10,width:200,marginBottom:10}}
              onPress={() => props.navigation.navigate("MainScreen")}
            />
            

            
            <ButtonComponent
              btnText={english.LOGOUT}
              btnStyle={{
                backgroundColor: colors.BlackOpacity20,
                borderRadius: 10,
                width: 200,
                marginBottom:180,

              }}
              onPress={() => logout(props)}
            />
        </SafeAreaView>
            
        </View>
      </ScrollView>
    </WrapperContainer>
  );
            
};

export default HomeScreen;
