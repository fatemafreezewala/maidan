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
const VisionMission = ({navigation}) => {
  const {lang} = useContext(AppContext);
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
          {i18n.t('VM', {locale: lang})}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingBottom: 50, paddingHorizontal: 10}}>
        <Text style={styles.head}>
          {lang == 'ar' ? 'مهمتنا' : 'OUR MISSION'}
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
              justifyContent: 'flex-end',
              flexDirection: 'row',
              height: 50,
              backgroundColor: colors.themeBlue,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 0,
            }}>
            <Image source={require('../assets/img/icon-small.png')}></Image>
          </View>
        </View>
        {lang == 'ar' ? (
          <Text
            style={{
              paddingVertical: 20,
              color: '#37548d',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}>
            منذ عام 1987 وإنطلاقا من شعارنا (نحن نصنع الإبتسامة)، تستمر عيادة
            الميدان في السير على منهج مهمتها الناجح الذي يتمركز حول توفير أفضل و
            أجود خدمات طب الفم والأسنان لمرضانا، والذي جعلنا ننفرد و نفتخر
            بالحصول على الجائرة الدولية كأفضل عيادة أسنان في الكويت لعام 2018
          </Text>
        ) : (
          <Text
            style={{
              paddingVertical: 20,
              color: '#37548d',
              fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        )}

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.head}>
          {lang == 'ar' ? 'رؤيتنا' : 'OUR VISION'}
        </Text>

        <Text
          style={{
            paddingBottom: 50,
            color: '#37548d',
            fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
          }}>
          {lang == 'ar'
            ? 'ن ºتلك و ندير أك̧ مجموعة عيادات أسنان ª الكويت و ال·ق اوسط و أن نحرص ع© ر³ مرضانا'
            : ''}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VisionMission;

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
