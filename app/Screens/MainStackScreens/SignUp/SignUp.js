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
// styles from Login folder
import styles from "../SignUp/styles";
import colors from "../../../styles/colors";


const SignUp = () => {
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

  const onSignUp = () => {
    alert(" You  have Registerated Sucessfully");
  };
   
    return (
        <WrapperContainer isLoading={isLoading}>
        <ScrollView>
          <Header />
          <View style={{ flex: 1, justifyContent: "center" }}>
            
          <View style={{marginTop:50}}>  
            <Text style={styles.headingText}>{english.REGISTERATION}</Text>
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
              btnStyle={{...styles.btnStyle ,marginTop:10, backgroundColor:isEnable? colors.Ebony: colors.BlackOpacity20}}
              btnText={english.REGISTER_HERE}
              forgotTextStyle={styles.forgotTextStyle}
              onPress={onSignUp}
            />
            </View>
          </View>
          
        </ScrollView>
      </WrapperContainer>
    );
};





export default SignUp;
