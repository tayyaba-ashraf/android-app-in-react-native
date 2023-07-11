import { StyleSheet } from "react-native";
import colors from "./colors";
import { moderateScaleVertical, textScale, verticalScale } from "./responsiveSize";

export default StyleSheet.create({

    fontSize10:{
        fontSize:textScale(10),
        fontWeight:"bold",
        color:colors.Black,


    },
    fontSize12:{
        fontSize:textScale(12),
        color:colors.Black,


    },
    fontSize14:{
        fontSize:textScale(14),
        fontWeight:"bold",
        color:colors.Black,
        
       


    },
    fontSize16:{
        fontSize:textScale(16),
        fontWeight:"bold",
        color:colors.Black,
        textTransform:"uppercase",
       
       


    },
    fontSize18:{
        fontSize:textScale(18),
        fontWeight:"bold",
        color:colors.white,
        textTransform: "uppercase",
        


    },
    fontSize20:{
        fontSize:textScale(20),
        fontWeight:"bold",
        color:colors.Black,



    },

})