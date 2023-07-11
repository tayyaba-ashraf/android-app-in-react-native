// import libraries
import {StyleSheet} from "react-native";



//styles from app styles.js

import commonStyles from "../../../styles/commonStyles";
import { moderateScaleVertical } from "../../../styles/responsiveSize";
import colors from "../../../styles/colors";


const Trainstyles = StyleSheet.create({
    
  headingText:{
    ...commonStyles.fontSize20,
    alignSelf:"center",
    marginTop: moderateScaleVertical(40),
    marginBottom:moderateScaleVertical(110),
    textTransform:"uppercase",
    

  },
  Text:{
    ...commonStyles.fontSize20,
    alignSelf:"center",
    marginTop: moderateScaleVertical(40),
    textTransform:"lowercase",
    marginBottom:moderateScaleVertical(40),
    

  },
  ImageStyle:{
    width:100,
    height:100,
    marginTop:moderateScaleVertical(30),
    marginBottom:moderateScaleVertical(30),
    
    
  },
  recorder_container:{
    backgroundColor:colors.Bluetooth_Color,
    padding:10,

  },
  
    
    
    
    
  });
  export default Trainstyles;