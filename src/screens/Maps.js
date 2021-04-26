import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import ASD from 'react-native-vector-icons/Ionicons'
import colors from '../constants/colors'
const Maps = ({navigation}) => {
    return (
        <View style={styles.container}>
             <View style={{paddingVertical:20,height:70,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,backgroundColor:colors.themeBlue}}>
               <TouchableOpacity onPress={()=>navigation.goBack()}>
                <ASD name="chevron-back" color="#fff" size={30}></ASD>
            </TouchableOpacity>
            <Text style={{color:'#fff',fontSize:18,alignSelf:'center'}}>SALMIYA</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')}>
                <ASD name="menu" color="#fff" size={30}></ASD>
            </TouchableOpacity>
           
            </View>
            <View style={{flex:1}}> 
            <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
            </View>
       
      </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
       
        flex:1,
        width: '100%',
      
        
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
})
