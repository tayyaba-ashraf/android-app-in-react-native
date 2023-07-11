import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import imagePaths from "../Constants/imagePaths";
import colors from "../styles/colors";
//styles
import commonStyles from "../styles/commonStyles";
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize";

const TextinputWithLabel = ({
  Label,
  value,
  placeholder,
  onChangeText,
  inputStyle,
  textStyle,
  isSecure,
  onPressSecure,
  ...props
}) => {
  return (
    <View style={{marginTop:moderateScaleVertical(20)}}>
      <Text style={styles.labelStyle}>{Label}</Text>
      <View style={{ ...styles.inputStyle, ...inputStyle }}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={{ ...styles.textStyle,  ...textStyle }}
          {...props}
        />
        {!!onPressSecure && (
          <TouchableOpacity
            onPress={onPressSecure}
            style={{ marginLeft: moderateScale(6) }}
          >
            <Image
              source={isSecure ? imagePaths.hideIcon : imagePaths.showIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1.5,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.BlackOpacity20,
  },
  labelStyle: {
    ...commonStyles.fontSize14,
    textTransform: "uppercase",
    marginLeft:5,
  },
    
  textStyle: {
    ...commonStyles.fontSize12,
    flex: 1,
    
  },
});

export default TextinputWithLabel;
