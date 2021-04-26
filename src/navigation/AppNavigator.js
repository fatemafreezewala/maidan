import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthContext, {defaultState, reducer, restoreToken} from './Auth';
import Login from '../screens/Login';

import LanguageSelect from '../screens/LanguageSelect';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import About from '../screens/About';
import MainMenu from '../screens/MainMenu';
import OurCenters from '../screens/OurCenters';
import Services from '../screens/Services';
import Offers from '../screens/Offers';
import VisionMission from '../screens/VisionMission';
import AboutCenter from '../screens/AboutCenter';
import DoctorList from '../screens/DoctorList';
import OurCenterListView from '../screens/OurCenterListView';
import Contact from '../screens/Contact';
import DoctorInfo from '../screens/DoctorInfo';
import DentalFinancing from '../screens/DentalFinancing';
import Slider from '../screens/Slider';
import AppointDetails from '../screens/AppointDetails';
import BookAppoint from '../screens/BookAppoint';
import ForgetPass from '../screens/ForgetPass';
import Maps from '../screens/Maps';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  React.useEffect(() => {
    restoreToken(dispatch);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: (data) => {
        dispatch({type: 'SIGN_IN', token: data});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: (data) => {
        dispatch({type: 'SIGN_IN', token: data});
      },
    }),
    [],
  );

  if (state.isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.userToken == null ? (
          <>
            <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgetPass" component={ForgetPass} />
          </>
        ) : (
          
          <>
          <Stack.Screen name="Home" component={Home} />
          
            
            <Stack.Screen name="DentalFinancing" component={DentalFinancing} />
            <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen
              name="OurCenterListView"
              component={OurCenterListView}
            />
            <Stack.Screen name="BookAppoint" component={BookAppoint} />
            <Stack.Screen name="AppointDetails" component={AppointDetails} />
            <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
            <Stack.Screen name="Contact" component={Contact} />

            <Stack.Screen name="DoctorList" component={DoctorList} />

            <Stack.Screen name="VisionMission" component={VisionMission} />

            <Stack.Screen name="OurCenters" component={OurCenters} />
            <Stack.Screen name="Offers" component={Offers} />
            <Stack.Screen name="AboutCenter" component={AboutCenter} />

            <Stack.Screen name="Services" component={Services} />
           
            
           
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Maps" component={Maps} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default AppNavigator;
