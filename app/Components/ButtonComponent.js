import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";


const ButtonComponent = ({
  //folowing are props VALUES they will be used if sent otherwise defualt values will be used e.g buttonStyle
  btnText,
  onPress,
  btnStyle,
  textStyle,
  isDisable=false
  //... is a spread operator
}) => {
  return (
  
    <TouchableOpacity
      style={{ ...styles.buttonStyle, ...btnStyle }}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isDisable}
    >
      <Text style={{...styles.textStyle, ...textStyle}}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
   
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 54,
    marginHorizontal: 34,
  },
  textStyle: {
    ...commonStyles.fontSize18,
    
  },
});

export default ButtonComponent;
