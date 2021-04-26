import React, {useContext, useEffect, useState} from 'react';
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
    title: 'Salmiya',
  },
  {
    id: '1',
    title: 'Sharq',
  },
  {
    id: '2',
    title: 'jahra',
  },
  {
    id: '3',
    title: 'Sabal al Saleem',
  },
];

const OurCenterListView = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const {lang} = useContext(AppContext);
  const Item = ({item, onPress, style}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
      <ION name="chevron-forward" size={30} color="#BCBEC0"></ION>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#BCBEC0' : '#e5e5e5';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('DoctorList');
        }}
        style={{backgroundColor}}
        extraData={selectedId}
      />
    );
  };

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
          {i18n.t('OurCenters', {locale: lang})}
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

export default OurCenterListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    paddingVertical: 20,
    height: 70,
  },
  title: {
    fontSize: 15,
    color: '#2f8cc9',
    marginTop: 3,
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
