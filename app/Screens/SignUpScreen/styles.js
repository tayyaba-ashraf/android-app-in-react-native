// import libraries
import {StyleSheet} from "react-native";
import { moderateScale,moderateScaleVertical} from "../../styles/responsiveSize";
//styles
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";


const styles = StyleSheet.create({
    SignUpContainer: {
      flex: 1,
      padding: 10,
    },
    headingText:{
      ...commonStyles.fontSize16,
      alignSelf:"center",
      marginBottom:moderateScaleVertical(3),

    },
    
    
    textStyle: {
      ...commonStyles.fontSize16,
      color: colors.BlackOpacity20,
      marginTop: moderateScaleVertical(15),
      borderBottomWidth: 1.5,
      borderColor: "#C1C7C9",
      marginLeft: moderateScale(2),
    },
    forgotTextStyle:{
      ...commonStyles.fontSize18,
  
    },
  
    btnStyle: {
      marginTop: moderateScaleVertical(5),
      borderRadius: moderateScale(54),
      height: moderateScale(48),
      backgroundColor: colors.Sand_stone,
      marginHorizontal: moderateScale(34),
    },
  });
  export default styles;