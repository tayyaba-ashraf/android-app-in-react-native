// import libraries
import React, { useState ,useEffect} from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
//3rd party packages

//import constants
import english from "../../../Constants/language/english";
//import reusableComponents
import Header from "../../../Components/Header";
import TextinputWithLabel from "../../../Components/TextinputWithLabel";
import WrapperContainer from "../../../Components/WrapperContainer";
import ButtonComponent from "../../../Components/ButtonComponent";
// here using styles from SignUp folder
import styles from "../SignUp/styles";
import colors from "../../../styles/colors";
//constants
import navigationStrings from "../../../Constants/navigationStrings";




const Login = ({navigation}) => {
   
        const moveToscreen = (screen) => () => {
          navigation.navigate(screen);
        };
    const [state, setstate] = useState({
        isLoading: false,
        UserName: "",
        Email: "",
        password: "",
        isSecure: true,
        isEnable:false,
      });
      const {
        isLoading,
        UserName,
        Email,
        password,
        isSecure,
        isEnable
        
      } = state;

      //in updatesatate => data is new data & state is previous state
  const updateState = (data) => setstate((state) => ({ ...state, ...data }));


  useEffect(() => {
    if( UserName !== '' && Email !== '' && password!=='')
    {
      updateState({isEnable:true})
    }
    else
    {
      updateState({isEnable:false})
    }
  }, [UserName,Email,password]);

  
   
    return (
        <WrapperContainer isLoading={isLoading}>
        <ScrollView>
          <Header />
          <View style={{ flex: 1, justifyContent: "center" }}>
            
          <View style={{marginTop:50}}>  
            <Text style={styles.headingText}>{english.ACCESS_FOR_CONTROLLING}</Text>
            <TextinputWithLabel
              Label={english.USER_NAME}
              value={UserName}
              placeholder={english.ENTER_YOUR_USER_NAME}
              onChangeText={(UserName) => updateState({ UserName })}
            />
            <TextinputWithLabel
              Label={english.EMAIL}
              value={Email}
              placeholder={english.PLEASE_ENTER_YOUR_EMAIL}
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
            <ButtonComponent
              isDisable={ !isEnable }
              btnStyle={{...styles.ButtonStyle ,marginTop:10, backgroundColor:isEnable? colors.Ebony: colors.BlackOpacity20}}
              btnText={english.LOGIN_HERE}
              forgotTextStyle={styles.forgotTextStyle}
              onPress={moveToscreen(navigationStrings.MAINSCREEN)}
            />
            </View>
          </View>
          
        </ScrollView>
      </WrapperContainer>
    );
};





export default Login;


