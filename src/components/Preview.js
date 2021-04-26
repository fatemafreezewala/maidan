import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default (Preview = ({
  style, 
  item,
  imageKey,
  onPress,
  index,
  active, 
  local,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => navigation.navigate('Categories')}>
      <View style={[styles.imageContainer, styles.shadow]}>
       <View style={[styles.circle,{backgroundColor:item.color}]}>
           <Image style={{width:100,height:100,alignSelf:'center'}} source={{uri:item.image}}></Image>
       </View>
      </View>
      <Text style={[styles.desc,{color:item.color}]}>{item.desc}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  videoContainer: {
    width: 275,
   
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 
  desc: {
    fontSize: 20,
    letterSpacing: 0,
    marginTop: 10,
    fontFamily:'Poppins-SemiBold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  circle:{
      width:230,
      height:230,
      borderRadius:300,
     
      justifyContent:'center'
  }
});