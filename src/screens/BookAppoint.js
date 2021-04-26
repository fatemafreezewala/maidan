import React, {useContext, useEffect} from 'react';
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
  TextInput,
  Platform
} from 'react-native';
import colors from '../constants/colors';
import ION from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import AppContext from '../context/AppContext';
const BookAppoint = ({navigation}) => {
  const {lang} = useContext(AppContext);
  if (lang == 'ar') {
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
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
              color: '#fff',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            {lang == 'ar' ? 'حجز المواعيد' : 'BOOKING DETAILS'}
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
          }}></View>
        <ScrollView style={{paddingHorizontal: 10}}>
          <View style={[styles.row, {justifyContent: 'flex-end'}]}>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="تفاصيل الموعد"></TextInput>
            <Image
              style={styles.image}
              source={require('../assets/img/app/detail.png')}></Image>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-end'}]}>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="اسم المريض"></TextInput>
            <Image
              style={styles.image}
              source={require('../assets/img/app/doctor.png')}></Image>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-end'}]}>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="رقم الهاتف"></TextInput>
            <Image
              style={styles.image}
              source={require('../assets/img/app/phone.png')}></Image>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-end'}]}>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="البريد الالكتروني"></TextInput>
            <Image
              style={styles.image}
              source={require('../assets/img/app/email.png')}></Image>
          </View>
          <View style={[styles.row, {justifyContent: 'flex-end'}]}>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="التاريخ والوقت"></TextInput>
            <Image
              style={styles.image}
              source={require('../assets/img/app/date.png')}></Image>
          </View>
          <View style={[styles.row]}>
            <View style={styles.column2}>
              <ION size={30} name="chevron-back-outline"></ION>
            </View>
            <View style={[styles.column3]}>
              <Text
                style={[
                  styles.text,
                  {textAlign: 'right', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'},
                ]}>
                الفرع
              </Text>
            </View>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/location.png')}></Image>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column2}>
              <ION size={30} name="chevron-back-outline"></ION>
            </View>
            <View style={styles.column3}>
              <Text
                style={[
                  styles.text,
                  {textAlign: 'right', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'},
                ]}>
                خدماتنا
              </Text>
            </View>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/service.png')}></Image>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column2}>
              <ION size={30} name="chevron-back-outline"></ION>
            </View>
            <View style={styles.column3}>
              <Text
                style={[
                  styles.text,
                  {textAlign: 'right', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'},
                ]}>
                اسم الطبيب
              </Text>
            </View>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/doctor.png')}></Image>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column2}>
              <ION size={30} name="chevron-back-outline"></ION>
            </View>
            <View style={styles.column3}>
              <Text
                style={[
                  styles.text,
                  {textAlign: 'right', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'},
                ]}>
                فني التنظيف والتبييض
              </Text>
            </View>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/doctor.png')}></Image>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AppointDetails')}>
          <Button
            style={{marginVertical: 40}}
            
            title="تأكيد الموعد"
            backgroundColor="#58595b"></Button>
          </TouchableOpacity>
          
        </ScrollView>
      </SafeAreaView>
    );
  } else {
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
            {lang == 'ar' ? 'حجز المواعيد' : 'BOOKING DETAILS'}
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
          }}></View>
        <ScrollView style={{paddingHorizontal: 10}}>
          <View style={[styles.row]}>
            <Image
              style={styles.image}
              source={require('../assets/img/app/detail.png')}></Image>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="Details"></TextInput>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/img/app/doctor.png')}></Image>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="Patient Name"></TextInput>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/img/app/phone.png')}></Image>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="Phone"></TextInput>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/img/app/email.png')}></Image>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="E-Mail"></TextInput>
          </View>
          <View style={styles.row}>
            <Image
              style={styles.image}
              source={require('../assets/img/app/date.png')}></Image>
            <TextInput
              placeholderTextColor="#4a99cf"
              placeholder="Date & Time"></TextInput>
          </View>
          <View style={styles.row2}>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/location.png')}></Image>
            </View>
            <View style={styles.column3}>
              <Text style={styles.text}>Center</Text>
            </View>
            <View style={styles.column2}>
              <ION size={30} name="chevron-forward"></ION>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/service.png')}></Image>
            </View>
            <View style={styles.column3}>
              <Text style={styles.text}>Services</Text>
            </View>
            <View style={styles.column2}>
              <ION size={30} name="chevron-forward"></ION>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/doctor.png')}></Image>
            </View>
            <View style={styles.column3}>
              <Text style={styles.text}>Dr. Name</Text>
            </View>
            <View style={styles.column2}>
              <ION size={30} name="chevron-forward"></ION>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.column1}>
              <Image
                style={styles.image}
                source={require('../assets/img/app/doctor.png')}></Image>
            </View>
            <View style={styles.column3}>
              <Text style={styles.text}>Specialists</Text>
            </View>
            <View style={styles.column2}>
              <ION size={30} name="chevron-forward"></ION>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AppointDetails')}>
          <Button
            style={{marginVertical: 40}}
            
            title="CONFIRM"
            backgroundColor="#58595b"></Button>
          </TouchableOpacity>
        
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default BookAppoint;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    height: 75,
    marginTop: 10,
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    height: 75,
    marginTop: 10,
    width: '100%',
  },
  text: {
    color: '#4a99cf',
    fontSize: 15,
    paddingVertical: 20,
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginVertical: 25,
  },
  column1: {
    flexDirection: 'column',
    width: '13%',
  },
  column2: {
    flexDirection: 'column',
    width: '15%',
    justifyContent: 'center',
  },
  column3: {
    flexDirection: 'column',
    width: '72%',
    justifyContent: 'center',
  },
});
