import React,{useEffect} from "react";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
//Constants are followings
import imagePaths from "../../Constants/imagePaths";
import navigationStrings from "../../Constants/navigationStrings";
import colors from "../../styles/colors";
import english from "../../Constants/language/english";
//reusable Component
import ButtonComponent from "../../Components/ButtonComponent";

//third party pacakge
import AsyncStorage from "@react-native-community/async-storage";

import HomeScreen from "../MainStackScreens/HomeScreen/HomeScreen";


const WelcomeScreen = (props) => {
  

  const moveToscreen = (screen) => () => {
    navigation.navigate(screen)
  }
 
  /*If already Logged in*/
  const detectLogin = async () =>{
    const token = await AsyncStorage.getItem('token')
    
    if(token){
     props.navigation.replace("HomeScreen")
    }
    
    
      
         
            
        
  }

  useEffect(() => {
    
    detectLogin()  
  },[])
  
  
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "flex-end" }}
      source={imagePaths.BackgroundImg}
    >
      <SafeAreaView style={{flexDirection: "column",justifyContent: "space-evenly",width: 200,marginBottom:150,marginLeft:50}}>
        <ButtonComponent
          btnText={english.LOGIN}
          btnStyle={{ backgroundColor:colors.Metallic_Silver,borderRadius: 10,width:200,marginBottom:10}}
          onPress={()=> props.navigation.navigate("LoginScreen")}
        />

        <ButtonComponent
          btnText={english.SIGNUP}
          btnStyle={{ backgroundColor: colors.Davy_Grey,borderRadius: 10,width:200}}
          onPress={()=> props.navigation.navigate("SignUpScreen")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
