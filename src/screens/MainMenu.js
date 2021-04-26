import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform
} from 'react-native';
import colors from '../constants/colors';
import ION from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
import AuthContext from '../navigation/Auth';
import AsyncStorage from '@react-native-community/async-storage'
const MainMenu = ({navigation}) => {
  const {menu, setMenu, lang} = useContext(AppContext);
  const { signOut } = useContext(AuthContext)
  const LogOut = async () =>{
    await AsyncStorage.clear();
    signOut();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => navigation.goBack()}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>
      <View style={styles.white}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              setMenu('About');
              navigation.navigate('About');
            }}>
            <View style={[styles.item, menu == 'About' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu8.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[styles.head, menu == 'About' ? {color: '#fff'} : '']}>
                  {i18n.t('aboutus', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'About' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('Services');
              navigation.navigate('Services');
            }}>
            <View style={[styles.item, menu == 'Services' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu7.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'Services' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('Services', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'Services' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('BookAppoint');
              navigation.navigate('BookAppoint');
            }}>
            <View
              style={[styles.item, menu == 'BookAppoint' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'BookAppoint' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('BookAppoint', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'BookAppoint' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('Slider');
              navigation.navigate('Slider');
            }}>
            <View style={[styles.item, menu == 'Slider' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu4.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'Slider' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('Offers', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'Slider' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('OurCenters');
              navigation.navigate('OurCenters');
            }}>
            <View
              style={[styles.item, menu == 'OurCenters' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu5.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'OurCenters' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('OurCenters', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'OurCenters' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('DentalFinancing');
              navigation.navigate('DentalFinancing');
            }}>
            <View
              style={[
                styles.item,
                menu == 'DentalFinancing' ? styles.dark : '',
              ]}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu3.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'DentalFinancing' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('aboutus', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'DentalFinancing' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('OurCenterListView');
              navigation.navigate('OurCenterListView');
            }}>
            <View
              style={[
                styles.item,
                menu == 'OurCenterListView' ? styles.dark : '',
              ]}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu6.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'OurCenterListView' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('team', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'OurCenterListView' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenu('Contact');
              navigation.navigate('Contact');
            }}>
            <View style={[styles.item, menu == 'Contact' ? styles.dark : '']}>
              <View style={styles.main}>
                <Image source={require('../assets/img/menu2.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[
                    styles.head,
                    menu == 'Contact' ? {color: '#fff'} : '',
                  ]}>
                  {i18n.t('ContactUs', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'Contact' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={LogOut}>
            <View style={[styles.item]}>
              <View style={styles.main}>
                <Image style={{width:32,height:32}} source={require('../assets/img/logout.png')}></Image>
              </View>
              <View style={styles.main2}>
                <Text
                  style={[styles.head]}>
                  {i18n.t('logout', {locale: lang})}
                </Text>
              </View>
              <View style={styles.main3}>
                <ION
                  name="md-chevron-forward"
                  color={menu == 'Contact' ? '#fff' : ''}
                  size={30}></ION>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#58595b',
  },
  container: {
    backgroundColor: colors.themeBlue,
    flex: 1,
    justifyContent: 'center',
  },
  white: {
    backgroundColor: '#fff',
    height: '90%',
    width: '95%',
  },
  item: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    paddingHorizontal: 20,
    borderBottomColor: colors.themeBlue,
    borderBottomWidth: 1,
  },
  main: {
    flexDirection: 'column',
    width: '15%',
    justifyContent: 'center',
  },
  main2: {
    flexDirection: 'column',
    width: '75%',
    justifyContent: 'center',
  },
  head: {
    color: '#3e95ce',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
  main3: {
    flexDirection: 'column',
    width: '10%',
    justifyContent: 'center',
  },
});
