import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import colors from '../constants/colors'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContentOptions={{
				activeTintColor: colors.themeGreen,
				labelStyle: { fontSize: 17 },
			}}
			drawerContent={(props) => <CustomDrawer {...props} />}>
			
		</Drawer.Navigator>
	)
}

export default DrawerNavigator
