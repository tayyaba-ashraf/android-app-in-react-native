// import libraries
import {StyleSheet} from "react-native";


//styles from app styles.js
import commonStyles from "../../../styles/commonStyles";
import { moderateScaleVertical } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";





const styles = StyleSheet.create({
    
    headingText:{
      ...commonStyles.fontSize16,
      alignSelf:"center",
      marginBottom:moderateScaleVertical(50),
      marginTop: moderateScaleVertical(100),

    },
    ButtonStyle:{
      ...commonStyles.fontSize16,
      
    
    },
    
    
    
  });
  export default styles;