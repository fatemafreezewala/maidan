import React, {useContext, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import ION from 'react-native-vector-icons/Ionicons';
import AppContext from '../context/AppContext';
import colors from '../constants/colors';

import i18n from '../i18n';
const data = [
  'https://images.unsplash.com/photo-1607083206203-821b1f96c7f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1091&q=80',
  'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];
const Offers = ({navigation}) => {
  const {menu, setMenu, lang} = useContext(AppContext);
  const screenWidth = Math.round(Dimensions.get('window').width);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 20,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          backgroundColor: colors.themeBlue,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ION name="chevron-back" color="#fff" size={30}></ION>
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
          {i18n.t('Offers', {locale: lang})}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{width: '100%', backgroundColor: '#fff'}}>
          <SliderBox
            images={data}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,

              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingRight: 20,
            }}
            ImageComponentStyle={{width: '90%', marginTop: 25, height: 150}}
          />
          <View style={styles.bottom}>
            <Text style={styles.text}>FIRST</Text>
          </View>
        </View>
        <View style={{width: '100%', backgroundColor: '#fff'}}>
          <SliderBox
            images={data}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,

              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingRight: 20,
            }}
            ImageComponentStyle={{width: '90%', marginTop: 25, height: 150}}
          />
          <View style={styles.bottom}>
            <Text style={styles.text}>SECOND</Text>
          </View>
        </View>
        <View style={{width: '100%', backgroundColor: '#fff'}}>
          <SliderBox
            images={data}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,

              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingRight: 20,
            }}
            ImageComponentStyle={{width: '90%', marginTop: 25, height: 150}}
          />
          <View style={styles.bottom}></View>
        </View>
        <View style={{width: '100%', backgroundColor: '#fff'}}>
          <SliderBox
            images={data}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,

              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingRight: 20,
            }}
            ImageComponentStyle={{width: '90%', marginTop: 25, height: 150}}
          />
          <View style={styles.bottom}></View>
        </View>
        <View style={{width: '100%', backgroundColor: '#fff'}}>
          <SliderBox
            images={data}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,

              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              paddingBottom: 10,
              paddingRight: 20,
            }}
            ImageComponentStyle={{width: '90%', marginTop: 5, height: 150}}
          />
          <View style={styles.bottom}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  contentStyke: {
    paddingHorizontal: 16,
  },
  bottom: {
    width: '90%',
    height: 50,
    backgroundColor: '#58595b',
    marginLeft: '5%',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    color: '#fff',
    paddingVertical: 15,
    marginLeft: 20,
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
