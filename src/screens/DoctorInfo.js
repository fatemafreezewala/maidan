import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import colors from '../constants/colors';
import ASD from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const DoctorInfo = ({navigation}) => {
  const {lang,cfont} = useContext(AppContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          paddingVertical: 20,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          backgroundColor: colors.themeBlue,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ASD name="chevron-back" color="#fff" size={30}></ASD>
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
          Dr Nahed Ghibrris
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ASD name="menu" color="#fff" size={30}></ASD>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal: 10, paddingVertical: 20}}>
        <View
          style={{
            marginHorizontal: 10,
            width: '95%',
            height: 250,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 15,
          }}>
          <Image
            style={{width: 300, height: 250}}
            source={require('../assets/img/doctor2-17.png')}></Image>
        </View>
        <View style={{marginTop: 20}}>
          <Unorderedlist color="red">
            <Text style={{color: '#1B83C6', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'}}>
              BDS (Bachelor of Dental Surgery), University of Kerala, India,
              1989
            </Text>
          </Unorderedlist>
          <Unorderedlist color="red">
            <Text style={{color: '#1B83C6', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'}}>
              MDS Orthodontics (Master of Dental Surgery), university of Kerala,
              India, 1993
            </Text>
          </Unorderedlist>
          <Unorderedlist color="red">
            <Text style={{color: '#1B83C6', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'}}>
              MOrth RCS (Member in Orthodontics) Royal College of Surgeons,
              Edinburgh, UK, 2008
            </Text>
          </Unorderedlist>
          <Unorderedlist color="red">
            <Text style={{color: '#1B83C6', fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic'}}>
              FWFO (Fellow of World Federation of Orthodontics), 2008
            </Text>
          </Unorderedlist>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <Button
          onPress={() => navigation.goBack()}
          backgroundColor={colors.darkBlue}
          title= {i18n.t('book_now', {locale: lang})}
          style={{marginTop: 10}}></Button>
      </View>
    </SafeAreaView>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({});
