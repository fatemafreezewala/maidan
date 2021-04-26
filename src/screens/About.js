import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../components/Button';
import colors from '../constants/colors';
import ION from 'react-native-vector-icons/Ionicons';
import AppContext from '../context/AppContext';
import i18n from '../i18n';

const About = ({navigation}) => {
  const {lang} = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ION name="chevron-back" color="#fff" size={30}></ION>
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
          }}>
          {i18n.t('aboutus', {locale: lang})}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          backgroundColor: '#dedede',
          height: 30,
          marginTop: 20,
        }}></View>
      <ScrollView>
        <Text
          style={{
            fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            textTransform: 'uppercase',
            paddingVertical: 40,
          }}>
          {i18n.t('We_create_the_Smile', {locale: lang})}
        </Text>

        <View style={styles.row}>
          <TouchableOpacity>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/about4.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('Overview', {locale: lang})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('VisionMission')}>
            <Image source={require('../assets/img/about2.png')}></Image>
            <Text style={styles.text}>{i18n.t('VM', {locale: lang})}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('OurCenters')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/about3.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('OurCenters', {locale: lang})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/about1.png')}></Image>
            <Text style={styles.text}>{i18n.t('Awards', {locale: lang})}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeBlue,
    flex: 1,

    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 11,
    marginTop: 10,
    textTransform: 'uppercase',
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
