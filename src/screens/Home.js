import React, {useContext, useEffect, useState} from 'react';
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

const Home = ({navigation}) => {
  const {lang, setLang, setMenu} = useContext(AppContext);
  const [language, setLanguage] = useState('');
  useEffect(() => {
    setMenu('');
    if (lang == 'ar') {
      setLanguage('عربى');
    } else {
      setLanguage('English');
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (lang == 'en') {
              i18n.locale = 'ar';
              setLang('ar');
              setLanguage('عربى');
            } else {
              i18n.locale = 'en';
              setLang('en');
              setLanguage('English');
            }
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              alignSelf: 'center',
              fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
            }}>
            {language}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
          }}>
          {i18n.t('main', {locale: lang})}
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
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            textTransform: 'uppercase',
            paddingVertical: 20,
            fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
          }}>
          {i18n.t('We_create_the_Smile', {locale: 'ar'})}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            textTransform: 'uppercase',
            paddingVertical: 0,
            fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
          }}>
          {i18n.t('We_create_the_Smile', {locale: 'en'})}
        </Text>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/about.png')}></Image>
            <Text style={styles.text}>{i18n.t('aboutus', {locale: lang})}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('Slider');
              navigation.navigate('Slider');
            }}>
            <Image source={require('../assets/img/offer.png')}></Image>
            <Text style={styles.text}>{i18n.t('Offers', {locale: lang})}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setMenu('Services');
              navigation.navigate('Services');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/services.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('Services', {locale: lang})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('BookAppoint');
              navigation.navigate('BookAppoint');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/bookappoint.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('BookAppoint', {locale: lang})}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setMenu('OurCenters');
              navigation.navigate('OurCenters');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/location.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('OurCenters', {locale: lang})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('DentalFinancing');
              navigation.navigate('DentalFinancing');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/dental.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('DentalFinancing', {locale: lang})}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setMenu('OurCenterListView');
              navigation.navigate('OurCenterListView');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/team.png')}></Image>
            <Text style={styles.text}>{i18n.t('team', {locale: lang})}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('Contact');
              navigation.navigate('Contact');
            }}>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/img/contact.png')}></Image>
            <Text style={styles.text}>
              {i18n.t('ContactUs', {locale: lang})}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
    marginTop: 30,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 10,
    fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
  },
});
