// import libraries
import {StyleSheet} from "react-native";
import { moderateScale,moderateScaleVertical} from "../../styles/responsiveSize";
//styles
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";


const styles = StyleSheet.create({
    LoginContainer: {
      flex: 1,
      padding: 24,
    },
    textStyle: {
      ...commonStyles.fontSize16,
      color: colors.Ebony,
      marginTop: moderateScaleVertical(15),
      borderBottomWidth: 1.5,
      borderColor: "#C1C7C9",
      marginLeft: moderateScale(2),
    },
    headingText:{
      ...commonStyles.fontSize20,
      alignSelf:"center",
      marginBottom:moderateScaleVertical(13),

    },
    forgotTextStyle:{
      ...commonStyles.fontSize18,
  
    },
  
    btnStyle: {
      marginTop: moderateScaleVertical(40),
      borderRadius: moderateScale(54),
      height: moderateScale(48),
      backgroundColor: colors.Ebony,
      marginHorizontal: moderateScale(34),
    },
  });
  export default styles;