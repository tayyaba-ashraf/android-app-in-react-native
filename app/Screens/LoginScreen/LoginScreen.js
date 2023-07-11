// import libraries
import React, { useState ,useEffect} from "react";
import { Text, View, TouchableOpacity, ScrollView ,KeyboardAvoidingView} from "react-native";


//3rd party packages

//import constants
import english from "../../Constants/language/english";
import navigationStrings from "../../Constants/navigationStrings";


//import reusableComponents

import TextinputWithLabel from "../../Components/TextinputWithLabel";
import WrapperContainer from "../../Components/WrapperContainer";
import ButtonComponent from "../../Components/ButtonComponent";
// styles from Login folder
import styles from "./styles";
import colors from "../../styles/colors";

import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from '@react-navigation/native';








const LoginScreen = (props) => {
  
  const navigation=useNavigation();
  
  const moveToscreen = (screen) => () => {
    navigation.navigate(screen)
  }
  const [state, setstate] = useState({
    isLoading: false,
    Email: "",
    password: "",
    isSecure: true,
    isEnable:false,
  });

  
  const { isLoading, Email, password, isSecure,isEnable } = state;
    //in updatesatate => data is new data & state is previous state
  const updateState = (data) => setstate((state) => ({ ...state, ...data }));

  useEffect(() => {
    if(Email !== '' && password!=='')
    {
      updateState({isEnable:true})
      
    }
    else
    {
      updateState({isEnable:false})
    }
  }, [Email,password]);
  
  
  
  const sendCredentials = async (props) => {
    fetch("http://ipaddress:3000/signin",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":Email,
        "password":password
      })
    })
    .then(res=>res.json())
    .then(async (data) => {
      
      try {
        await AsyncStorage.setItem('token',data.token)
        props.navigation.navigate("HomeScreen")
        
      } 
      catch (e) {
        console.log("There is an error",e)
      }
    })
   
    
    
  }


  return (
    <WrapperContainer isLoading={isLoading}>
      <KeyboardAvoidingView behavior="position">
      <ScrollView>
        <View style={({ flex: 1 }, { justifyContent: "space-between" })}>
          <Text style={styles.headingText}>{english.LOGIN_HERE}</Text>
          <View>
            <TextinputWithLabel
              Label={english.USERNMAE_OR_EMAIL}
              value={Email}
              placeholder={english.PLEASE_ENTER_YOUR_USERNAME_OR_EMAIL}
              onChangeText={(Email) => updateState({ Email })}
            />
            <TextinputWithLabel
              Label={english.PASSWORD}
              value={password}
              placeholder={english.PLEASE_ENTER_YOUR_PASSWORD}
              onChangeText={(password) => updateState({ password })}
              secureTextEntry={isSecure}
              isSecure={isSecure}
              onPressSecure={() => updateState({ isSecure: !isSecure })}
            />
            
          </View>

          <ButtonComponent
           isDisable={ !isEnable }
            btnStyle={{...styles.btnStyle , backgroundColor:isEnable? colors.Brown: colors.BlackOpacity20}}
            btnText={english.LOGIN}
            forgotTextStyle={styles.forgotTextStyle}
            onPress={()=>sendCredentials(props)}
          />

          <TouchableOpacity>
            <Text style={{fontSize:18,marginLeft:18,marginTop:20}}
            onPress={moveToscreen(navigationStrings.SIGNUPSCREEN)}
            >
              Don't  have an account yet?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </WrapperContainer>
  );
};

export default LoginScreen;
