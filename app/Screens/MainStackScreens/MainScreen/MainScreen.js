import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView,Image} from 'react-native';
import { Icon } from 'react-native-vector-icons';

//constants
import imagePaths from '../../../Constants/imagePaths';
import english from '../../../Constants/language/english';
import navigationStrings from '../../../Constants/navigationStrings';

//reusableComponents
import WrapperContainer from '../../../Components/WrapperContainer';
import ButtonComponent from '../../../Components/ButtonComponent';
import Header from '../../../Components/Header';

//import screens
import ControlScreen from '../ControlScreen/ControlScreen';
import TrainScreen from '../TrainScreen/TrainScreen';

//style.js for MainScreen
import styles from './styles';

//styles
import colors from '../../../styles/colors';



import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TabRoutes } from '../../../Navigations/TabRoutes';




const Tab=createBottomTabNavigator();

// const TabRoutes = () => {
//   return (
//     <Tab.Navigator initialRouteName={navigationStrings.CONTROLSCREEN}>

//       <Tab.Screen
//         name={navigationStrings.CONTROLSCREEN}
//         component={ControlScreen}
//         options={{title: 'Control Robot', headerShown: false}}
//       />
//       <Tab.Screen
//         name={navigationStrings.TRAINSCREEN}
//         component={TrainScreen}
//         options={{title: 'Train Robot', headerShown: false}}
//       />

//     </Tab.Navigator>
//   );
// };

const MainScreen =(props) => {
  const moveToscreen = screen => () => {
    navigation.navigate(screen);
  };

  const [state, setstate] = useState({
    isLoading: false,
  });

  const {isLoading} = state;

  // const logout = props => {
  //   AsyncStorage.removeItem('token').then(() => {
  //     props.navigation.navigate('WelcomeScreen');
  //   });
  // };

 

  return (
    <>
      <WrapperContainer isLoading={isLoading}>
      <Header/>
        <ScrollView>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.headingText}>{english.WELCOME_MAIN}</Text>

            <SafeAreaView
              style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                width: 200,
                marginRight: 50,
              }}>
              <ButtonComponent
                btnText={english.CONTROLL_ROBOT}
                btnStyle={{
                  backgroundColor: colors.Metallic_Silver,
                  borderRadius: 10,
                  width: 200,
                  marginBottom: 10,
                }}
                
                onPress={() => props.navigation.navigate("ControlScreen")}
                
              />

              <ButtonComponent
                btnText={english.TRAIN_ROBOT}
                btnStyle={{
                  backgroundColor: colors.BlackOpacity20,
                  borderRadius: 10,
                  width: 200,
                  marginBottom: 10,
                }}
                onPress={() => props.navigation.navigate("TrainScreen")}
              />

              
              
                
              
            </SafeAreaView>
          </View>
        </ScrollView>
      </WrapperContainer>
    </>
  );
};

export default MainScreen;
