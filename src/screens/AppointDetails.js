import React, {useCallback, memo, useRef, useState, useContext} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import colors from '../constants/colors';
import ION from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const AppointDetails = ({navigation}) => {
  const {lang} = useContext(AppContext);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          paddingVertical: 20,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: colors.themeBlue,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ION name="chevron-back" color="#fff" size={30}></ION>
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            alignSelf: 'center',
            fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
          }}>
          {lang == 'ar' ? 'تأكيد الموعد' : 'APPOINTMENT DETAILS'}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>
      <View
        style={{width: '100%', backgroundColor: '#dedede', height: 30}}></View>
      <ScrollView style={{paddingHorizontal: 20}}>
        <Text style={styles.text}>
          {lang == 'ar'
            ? 'تفاصيل الموعد: حجز كشف'
            : 'Details : Book Appointment'}
        </Text>
        <Text style={styles.text}>
          {lang == 'ar' ? 'اسم المريض' : 'Patient name'}
        </Text>
        <Text style={styles.text}>{lang == 'ar' ? 'رقم الهاتف' : 'Phone'}</Text>
        <Text style={styles.text}>
          {lang == 'ar' ? 'البريد الالكتروني' : 'E-Mail'}
        </Text>
        <Text style={styles.text}>
          {lang == 'ar' ? 'التاريخ والوقت' : 'Date & Time'}
        </Text>
        <Text style={styles.text}>{lang == 'ar' ? 'الفرع' : 'Center'}</Text>
        <Text style={styles.text}>{lang == 'ar' ? 'خدماتنا' : 'Services'}</Text>
        <Text style={styles.text}>
          {lang == 'ar' ? 'اسم الطبيب' : 'Dr. Name'}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={{width: 100, resizeMode: 'contain'}}
            source={require('../assets/img/mastercard-14.png')}></Image>
          <Image
            style={{width: 100, resizeMode: 'contain'}}
            source={require('../assets/img/Visa-14.png')}></Image>
          <Image
            style={{width: 100, resizeMode: 'contain'}}
            source={require('../assets/img/net-14.png')}></Image>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Button
          style={{marginTop: 50}}
          
          title={lang == 'ar' ? 'ادفع الآن' : 'PAY NOW'}
          backgroundColor="#58595b"></Button>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointDetails;

const styles = StyleSheet.create({
  text: {
    color: '#254683',
    marginVertical: 13,
    fontSize: 16,
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
