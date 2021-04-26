import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  SafeAreaView,
  Platform,
  ActivityIndicator
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../components/Button';
import colors from '../constants/colors';
import FA5 from 'react-native-vector-icons/FontAwesome';
import AppContext from '../context/AppContext';
import AuthContext from '../navigation/Auth';
import i18n from '../i18n';
import CheckBox from '@react-native-community/checkbox';
import url from '../constants/api';
import AsyncStorage from '@react-native-community/async-storage'
import Toast from 'react-native-simple-toast';
const Login = ({navigation}) => {
  const {lang} = useContext(AppContext);
  const { signIn } = useContext(AuthContext)
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const [civilid, setId] = useState('')
  const [Password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const handleLogin = async () => {
    
		setLoading(true)
      console.log(civilid)
		try {
			const res = await fetch(`${url}login`, {
        headers:{
          'Content-Type':'application/json'
        },
				method: 'POST',
				body:JSON.stringify({
          'civic_id':civilid,
          'password':Password
        }), 
			}) 
            const json = await res.json() 
             console.log(json)
			if (json.status == 'success') {
        Toast.show('Login Successfull.', Toast.LONG);
                await AsyncStorage.setItem('USER_TOKEN', '123')
                await AsyncStorage.setItem('token', json.data.auth_token)
				        await AsyncStorage.setItem('USER', JSON.stringify(json.data))
                signIn('123')
                navigation.navigate('Home')
			} else {
        Toast.show('Invalid Username and Password.', Toast.LONG);
			}
		} catch (error) {
			console.log('err',error)
		
		} finally {
			setLoading(false)
		}
	}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.circle}>
          <FA5
            style={{alignSelf: 'center'}}
            size={100}
            name="user"
            color="#1c83c6"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
          onChangeText={setId}
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
            }}
            placeholder={i18n.t('civil_id', {locale: lang})}
            placeholderTextColor="#88858c"
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="user"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
           onChangeText={setPassword}
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Password', {locale: lang})}
            placeholderTextColor="#88858c"
            secureTextEntry
          />
          <FA5
            style={{alignSelf: 'center'}}
            size={30}
            name="lock"
            color="#88858c"></FA5>
        </View>
        <TouchableOpacity onPress={handleLogin}>
        <Button
          style={{marginTop: 30}}
          onPress={handleLogin}
          title={i18n.t('Login', {locale: lang})} 
          loading={loading}
          backgroundColor={colors.darkBlue}></Button>
        </TouchableOpacity>
        
        <Button
          onPress={() => navigation.navigate('Home')}
          backgroundColor={colors.darkBlue}
          title={i18n.t('guest', {locale: lang})}
          style={{marginTop: 10}}></Button>
          <View style={{flexDirection:'row',width:'100%',marginTop:30,}}>
            <View style={{flexDirection:'column',width:'50%'}}>
          
            <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPass');
            }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 13,
                  textDecorationLine: 'underline',
                  marginTop: 5,
                  fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
                }}>
                {' '}
                {i18n.t('Forget_Password', {locale: lang})}?
              </Text>
      
          </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column',width:'40%'}}>
          
            
              <Text
              style={{
                color: '#fff',
                fontSize: 15,
                textDecorationLine: 'underline',
                textAlign: 'right',
                fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',

              }}>
              {i18n.t('remember_me', {locale: lang})}
            </Text>
            
        
            </View>
            <View style={{flexDirection:'column',width:'10%',justifyContent:'flex-start'}}>
            <CheckBox
              style={{paddingBottom:10}}
              tintColors={{true: '#fff'}}
              onCheckColor={{true: '#fff'}}
              onFillColor={{true: '#fff'}}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            </View>
          </View>
        {/* <View
          style={{
            flexDirection: 'row',
            marginVertical: 30,
            width: '100%',
            height: 50,
            backgroundColor:'#dedede'
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPass');
            }}>
            <View style={{flexDirection: 'column', width: '50%',backgroundColor:'#000'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 13,
                  textDecorationLine: 'underline',
                  marginTop: 5,
                  fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
                }}>
                {' '}
                {i18n.t('Forget_Password', {locale: lang})}?
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'column', width: '45%'}}>
            <Text
              style={{
                left: '25%',
                position: 'absolute',
                top: 5,
                color: '#fff',
                fontSize: 15,
                textDecorationLine: 'underline',
                textAlign: 'right',
                fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',

              }}>
              {i18n.t('remember_me', {locale: lang})}
            </Text>
          </View>
          <View
            style={{flexDirection: 'column', width: '5%', paddingBottom: 20}}>
            <CheckBox
              style={{position: 'absolute', top: 0, bottom: 30}}
              tintColors={{true: '#fff'}}
              onCheckColor={{true: '#fff'}}
              onFillColor={{true: '#fff'}}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          </View>
        </View> */}
        <Pressable
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={{alignSelf: 'center', marginTop: '5%'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              textDecorationLine: 'underline',
              fontFamily: Platform.OS == 'android' ?Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic' :'Din Next Arabic',
            }}>
            {i18n.t('Sign_up', {locale: lang})}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  welcome: {
    fontSize: RFValue(24, 580),
    textAlign: 'center',
    margin: 10,
  },
  container: {
    backgroundColor: colors.themeBlue,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 200,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#e5e5e5',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
