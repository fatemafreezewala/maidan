

import React,{useEffect,useContext} from 'react';
import { StatusBar,Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator'
import { AppProvider } from './src/context/AppContext'
import BackgroundColor from 'react-native-background-color';


const App = ()  => {
	
	useEffect(() => {
		if(Platform.OS == 'android'){
			BackgroundColor.setColor('#FFFFFF');
			
		}
		
	}, [])
  return (
		<AppProvider>
			<NavigationContainer>
				<StatusBar backgroundColor="#1b83c6" barStyle="light-content" />
				<AppNavigator />
			</NavigationContainer>
		</AppProvider>
	)
};


export default App;
