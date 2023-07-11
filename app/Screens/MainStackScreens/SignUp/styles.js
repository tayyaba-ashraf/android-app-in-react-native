// import libraries
import {StyleSheet} from "react-native";


//styles
import { moderateScale,moderateScaleVertical } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";
import commonStyles from "../../../styles/commonStyles";


const styles = StyleSheet.create({
    
    headingText:{
      ...commonStyles.fontSize16,
      alignSelf:"center",
      marginBottom:moderateScaleVertical(3),
      

    },
    
    
    textStyle: {
      ...commonStyles.fontSize16,
      color: colors.Dark_Pink,
      marginTop: moderateScaleVertical(15),
      borderBottomWidth: 1.5,
      borderColor: "#C1C7C9",
      marginLeft: moderateScale(2),
    },
    forgotTextStyle:{
      ...commonStyles.fontSize18,
  
    },
  
    ButtonStyle:{
        ...commonStyles.fontSize16,
        
        
      
      },
  });
  export default styles;