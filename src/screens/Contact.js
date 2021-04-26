import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import ION from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import ASD from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const Contact = ({navigation}) => {
  const {lang} = useContext(AppContext);
  if (lang == 'ar') {
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
            <ASD name="chevron-back" color="#fff" size={30}></ASD>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
            {i18n.t('ContactUs', {locale: lang})}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
            <ASD name="menu" color="#fff" size={30}></ASD>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.item}>
            <View style={{flexDirection: 'column', width: '10%'}}>
              <ASD color="#797979" size={40} name="chevron-back-outline"></ASD>
            </View>
            <View style={{flexDirection: 'column', width: '75%'}}>
              <Text
                style={{
                  color: '#1B83C6',
                  paddingTop: 10,
                  textAlign: 'right',
                  paddingHorizontal: 20,
                  fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                }}>
                أرقام الهواتف
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '17%',
                justifyContent: 'center',
              }}>
              <ION color="#204180" size={40} name="phone"></ION>
            </View>
          </View>
          <View style={styles.item}>
            <View style={{flexDirection: 'column', width: '85%'}}>
              <Text
                style={{
                  color: '#1B83C6',
                  paddingTop: 10,
                  textAlign: 'right',
                  paddingHorizontal: 20,
                  fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                }}>
                البريد الالكتروني
              </Text>
            </View>
            <View style={{flexDirection: 'column', width: '15%'}}>
              <Feather color="#204180" size={40} name="mail"></Feather>
            </View>
          </View>
          <View style={styles.item}>
            <View style={{flexDirection: 'column', width: '10%'}}>
              <ASD color="#797979" size={40} name="chevron-back-outline"></ASD>
            </View>
            <View style={{flexDirection: 'column', width: '75%'}}>
              <Text
                style={{
                  color: '#1B83C6',
                  paddingTop: 10,
                  textAlign: 'right',
                  paddingHorizontal: 20,
                  fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                }}>
                {' '}
                اقتراحات
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '17%',
                justifyContent: 'center',
              }}>
              <ION color="#204180" size={40} name="edit"></ION>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={require('../assets/img/facebook-15.png')}></Image>
          <Image source={require('../assets/img/twitter-15.png')}></Image>
          <Image source={require('../assets/img/insta-15.png')}></Image>
          <Image source={require('../assets/img/youtube-15.png')}></Image>
        </View>
      </SafeAreaView>
    );
  } else {
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
            <ASD name="chevron-back" color="#fff" size={30}></ASD>
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              alignSelf: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}>
            {i18n.t('ContactUs', {locale: lang})}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
            <ASD name="menu" color="#fff" size={30}></ASD>
          </TouchableOpacity>
        </View>
        {lang == 'en' ? (
          <View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <ION color="#204180" size={40} name="phone"></ION>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  PHONE NUMBER
                </Text>
              </View>
              <View style={{flexDirection: 'column', width: '10%'}}>
                <ASD color="#797979" size={40} name="chevron-forward"></ASD>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <Feather color="#204180" size={40} name="mail"></Feather>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  EMAIL
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <Feather color="#204180" size={40} name="edit"></Feather>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  SUGGESTIONS
                </Text>
              </View>
              <View style={{flexDirection: 'column', width: '10%'}}>
                <ASD color="#797979" size={40} name="chevron-forward"></ASD>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <ION color="#204180" size={40} name="phone"></ION>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  PHONE NUMBER
                </Text>
              </View>
              <View style={{flexDirection: 'column', width: '10%'}}>
                <ASD color="#797979" size={40} name="chevron-forward"></ASD>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <Feather color="#204180" size={40} name="mail"></Feather>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  EMAIL
                </Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{flexDirection: 'column', width: '17%'}}>
                <Feather color="#204180" size={40} name="edit"></Feather>
              </View>
              <View style={{flexDirection: 'column', width: '75%'}}>
                <Text
                  style={{
                    color: '#1B83C6',
                    paddingTop: 10,
                    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                  }}>
                  SUGGESTIONS
                </Text>
              </View>
              <View style={{flexDirection: 'column', width: '10%'}}>
                <ASD color="#797979" size={40} name="chevron-forward"></ASD>
              </View>
            </View>
          </View>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image source={require('../assets/img/facebook-15.png')}></Image>
          <Image source={require('../assets/img/twitter-15.png')}></Image>
          <Image source={require('../assets/img/insta-15.png')}></Image>
          <Image source={require('../assets/img/youtube-15.png')}></Image>
        </View>
      </SafeAreaView>
    );
  }
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,

    paddingVertical: 15,
    width: '95%',
  },
  title: {
    fontSize: 15,
    color: '#204180',
  },
});
