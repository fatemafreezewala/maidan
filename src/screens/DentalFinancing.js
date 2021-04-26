import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const DentalFinancing = ({navigation}) => {
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ION name="chevron-back" color="#fff" size={30}></ION>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
            {i18n.t('DentalFinancing', {locale: lang})}
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
        <ScrollView style={{paddingBottom: 50, paddingHorizontal: 10}}>
          <Text style={styles.head}>
            {lang == 'ar' ? 'برنامج الأقساط' : 'Finance Plan'}
          </Text>
          <View>
            <Image
              style={{width: '100%', height: 200}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}></Image>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderColor: '#fff',
                justifyContent: 'space-between',
                flexDirection: 'row',
                height: 50,
                backgroundColor: colors.themeBlue,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 0,
              }}>
              <Text
                style={{
                  color: '#fff',
                  marginTop: 10,
                  fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                }}>
                {i18n.t('DentalFinancing', {locale: lang})}
              </Text>
              <Image source={require('../assets/img/icon-small.png')}></Image>
            </View>
          </View>

          <Text style={styles.head}>
            {lang == 'ar'
              ? 'الدفع لعلاج الأسنان (الدفع كما تريد!)'
              : 'Dental Financial (Pay As you like!)'}
          </Text>

          <Text
            style={{
              paddingBottom: 50,
              color: '#37548d',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}>
            لا أحد يحب المفاجأت عندما يتعلق الأمر بتكاليف العلاج. فسياستنا هي أن
            نشرح لكم تفاصيل كلفة العلاج قبل تقديم أي العلاج، وتحديد الترتيبات
            المالية مع المريض قبل المباشرة بالعلاج. بعد الفحص الأولي للمريض،
            نقوم باستعراض خطة العلاج الموصي بها من الطبيب المعالج وتكلفتها
            المتوقعة. في نفس الوقت تقدم العيادة للمرجعين العديد من وسائل الدفع
            المريحة، و نقوم بمناقشة الترتيبات المالية ومساعدتكم على اختيار طريقة
            الدفع التي تناسب احتياجاتك مع الحفاظ على مستوى مرتفع من الرعاية
            الصحية وجودة العلاج
          </Text>
        </ScrollView>
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
            {i18n.t('DentalFinancing', {locale: lang})}
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
        <ScrollView style={{paddingBottom: 50, paddingHorizontal: 10}}>
          <Text style={styles.head}>
            {lang == 'ar' ? 'برنامج الأقساط' : 'Finance Plan'}
          </Text>
          <View>
            <Image
              style={{width: '100%', height: 200}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}></Image>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderColor: '#fff',
                justifyContent: 'space-between',
                flexDirection: 'row',
                height: 50,
                backgroundColor: colors.themeBlue,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderWidth: 0,
              }}>
              <Text
                style={{
                  color: '#fff',
                  marginTop: 10,
                  fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
                }}>
                {i18n.t('DentalFinancing', {locale: lang})}
              </Text>
              <Image source={require('../assets/img/icon-small.png')}></Image>
            </View>
          </View>

          <Text style={styles.head}>
            {lang == 'ar'
              ? 'الدفع لعلاج الأسنان (الدفع كما تريد!)'
              : 'Dental Financial (Pay As you like!)'}
          </Text>

          <Text
            style={{
              paddingBottom: 50,
              color: '#37548d',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}>
            Nobody likes to be surprised when it comes to costs. Our policy is
            to inform you what your cost will be prior to any treatment, and
            define financial arrangements with you before we begin. After your
            initial examination, we will review with you our recommended
            treatment plan and its projected cost. To make getting a beautiful
            new smile as easy as possible, we offer several convenient payment
            methods. Our treatment coordinators are available to discuss
            financial arrangements and help you select the method of payment
            that best meets your needs. To provide the highest quality care. we
            have developed a full range of convenient payment options from which
            to choose. We accept cash, Visa, MasterCard and the usual debit
            cards along with the medical insurance cards. Ask about the 0%
            Interest free finance solution: A popular option for many of our
            patients is our financing plan that offers many benefits, and Our
            staff will be happy to provide you with additional information.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default DentalFinancing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    color: 'red',
    fontSize: 20,
    paddingVertical: 20,
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
