import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const DATA = [
  {
    id: '0',
    title: 'cosmetic Dentistry',
    arabic: 'طب الأسنان التجميلي',
  },
  {
    id: '1',
    title: 'Prostetics (Fixed & Removable)',
    arabic: 'التركيبات الثابتة والمتحركة',
  },
  {
    id: '2',
    title: 'Implant',
    arabic: 'زراعة الأسنان',
  },
  {
    id: '3',
    title: 'Gum Treatment',
    arabic: 'علاج اللثة',
  },
  {
    id: '4',
    title: 'Oral Surgery',
    arabic: 'جراحة الفم',
  },
  {
    id: '5',
    title: 'Endodontics  /Root Canal',
    arabic: 'علاج الأقنية والجذور',
  },
  {
    id: '6',
    title: 'Orthodontics',
    arabic: 'تقويم الأسنان',
  },
  {
    id: '7',
    title: 'Pedodontics',
    arabic: 'طب أسنان الأطفال',
  },
  {
    id: '8',
    title: 'Conservative Dentistry',
    arabic: 'طب الأسنان الوقائي',
  },
  {
    id: '9',
    title: 'Scaling & Bleaching',
    arabic: 'تنظيف وتبييض الأسنان',
  },
];

const Services = ({navigation}) => {
  const {lang} = useContext(AppContext);
  const Item = ({title, arabic}) => (
    <View style={styles.item}>
      <Text
        style={[
          styles.title,
          lang == 'ar' ? {textAlign: 'right'} : {textAlign: 'left'},
        ]}>
        {lang == 'ar' ? arabic : title}
      </Text>
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} arabic={item.arabic} />
  );

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
          {i18n.t('Services', {locale: lang})}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('MainMenu')}>
          <ION name="menu" color="#fff" size={30}></ION>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: '#2f8cc9',
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
