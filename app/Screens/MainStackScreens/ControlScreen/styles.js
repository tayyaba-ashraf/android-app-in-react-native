// import libraries
import {StyleSheet} from "react-native";


//styles from app styles.js

import commonStyles from "../../../styles/commonStyles";
import { moderateScaleVertical } from "../../../styles/responsiveSize";

const styles = StyleSheet.create({
    
    headingText:{
      ...commonStyles.fontSize20,
      alignSelf:"center",
      marginTop: moderateScaleVertical(40),
      marginBottom:moderateScaleVertical(80),
      textTransform:"uppercase",
      

    },
    Text:{
      ...commonStyles.fontSize20,
      alignSelf:"center",
      marginTop: moderateScaleVertical(40),
      textTransform:"lowercase",
      

    },
    ImageStyle:{
      width:100,
      height:100,
      marginTop:moderateScaleVertical(30),
      marginBottom:moderateScaleVertical(30),
      
      
    },
  
    
    
    
    
  });
  export default styles;