import React, {useContext, useEffect,useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity, 
  Platform
} from 'react-native';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Button from '../components/Button';
import colors from '../constants/colors';
import AppContext from '../context/AppContext';
import FA5 from 'react-native-vector-icons/FontAwesome';
import url from '../constants/api';
import AsyncStorage from '@react-native-community/async-storage'
import Toast from 'react-native-simple-toast';
import i18n from '../i18n';
const SignUp = ({navigation}) => {
  const [civic_id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [number, setnumber] = useState('')
  const [email, setEmail] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const {lang} = useContext(AppContext);
 
  const handleLogin = async () => {
    if(!name || !civic_id || !email || !password || !cpassword || !number){
      Toast.show('All Fields are required.', Toast.LONG);
    }else{
      if(password == cpassword){
      setLoading(true)
          
        try {
          const res = await fetch(`${url}register`, {
            headers:{
              'Content-Type':'application/json'
            },
            method: 'POST',
            body:JSON.stringify({
              "civic_id": civic_id,
              "email": email,
              "mobile": number,
              "password": password,
              "patient_name": name
            }), 
          }) 
                const json = await res.json() 
                console.log(json)
          if (json.status == 'success') {
            Toast.show('Sign Up Successfull.', Toast.LONG);
                  
                    navigation.navigate('Login')
          } else {
            Toast.show('Invalid Username and Password.', Toast.LONG);
          }
        } catch (error) {
          console.log('err',error)
        
        } finally {
          setLoading(false)
        }
      }else{
        Toast.show('Password and Confirm Password Donot match.', Toast.LONG);
      }
    }
	
	}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 10}}>
      <Image style={{width:200,height:200,alignSelf:'center'}} source={require('../assets/img/signup.png')}></Image>
        <Text style={{color: '#fff', fontSize: 25}}>
          {i18n.t('New_Account', {locale: lang})}
        </Text>
        <Text style={{color: '#fff', fontSize: 15}}>
          Let's get you started with your free maidan account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Enter_your_Full_Name', {locale: lang})}
            placeholderTextColor="#88858c"
            onChangeText={setName}
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="user"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Enter_your_Civil_ID_Number', {locale: lang})}
            placeholderTextColor="#88858c"
            onChangeText={setId}
            
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="user"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Enter_your_Mobile_Number', {locale: lang})}
            placeholderTextColor="#88858c"
            onChangeText={setnumber}
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="phone"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Enter_your_Current_Email', {locale: lang})}
            placeholderTextColor="#88858c"
            onChangeText={setEmail}
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="envelope"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Enter_your_Preferred_Password', {
              locale: lang,
            })}
            placeholderTextColor="#88858c"
            onChangeText={setPassword}
            secureTextEntry
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="lock"
            size={30}
            color="#88858c"></FA5>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder={i18n.t('Re_Enter_your_Preferred_Password', {
              locale: lang,
            })}
            placeholderTextColor="#88858c"
            onChangeText={setCPassword}
            secureTextEntry
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="lock"
            size={30}
            color="#88858c"></FA5>
        </View>
        <TouchableOpacity onPress={handleLogin}>
        <Button
          style={{marginTop: 20}}
         loading={loading}
          title={i18n.t('Create_My_Account', {locale: lang})}
          backgroundColor={colors.darkBlue}></Button>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#fff',
              fontSize: 15,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            Already have a maidan clinic account ?
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  welcome: {
    fontSize: RFValue(24, 580),
    textAlign: 'center',
    margin: 10,
  },
  container: {
    backgroundColor: colors.themeBlue,
    flex: 1,
  },
  input: {
    width: '85%',
    textAlign: 'center',
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#e5e5e5',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
