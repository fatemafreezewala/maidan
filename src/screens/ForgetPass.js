import React, {useContext, useEffect} from 'react';
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
const ForgetPass = ({navigation}) => {
  const {lang} = useContext(AppContext);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 10}}>
        <Image
          style={{width: 200, height: 200, alignSelf: 'center'}}
          source={require('../assets/img/signup.png')}></Image>
        <Text style={{color: '#fff', fontSize: 25}}>Forgot Password ?</Text>
        <Text style={{color: '#fff', fontSize: 15}}>
          Enter your registered email to get reset link
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={{
              width: '85%',
              textAlign: 'center',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}
            placeholder="EMAIL"
            placeholderTextColor="#88858c"
          />
          <FA5
            style={{alignSelf: 'center'}}
            name="envelope"
            size={30}
            color="#88858c"></FA5>
        </View>

        <Button
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Login')}
          title="SEND LINK"
          backgroundColor={colors.darkBlue}></Button>
        <Button
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Login')}
          title="LOGIN"
          backgroundColor={colors.darkBlue}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPass;

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
    marginVertical: 20,
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#e5e5e5',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
