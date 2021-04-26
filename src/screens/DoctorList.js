import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import AppContext from '../context/AppContext';
const DATA = [
  {
    id: '0',
    title: 'Dr John Zaki',
  },
  {
    id: '1',
    title: 'Dr Mohammed Hisam',
  },
  {
    id: '2',
    title: 'Dr Aroob Yaklef',
  },
  {
    id: '3',
    title: 'Dr Anja k',
  },
  {
    id: '4',
    title: 'Dr Haitam al Dahan',
  },
];
const Item = ({item, onPress, style}) => (
  <TouchableHighlight
    onPress={onPress}
    style={[styles.item]}
    underlayColor="#58595b">
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <Text style={styles.title}>{item.title}</Text>
      <ION name="chevron-forward" size={30} color="#58595B"></ION>
    </View>
  </TouchableHighlight>
);

const DoctorList = ({navigation}) => {
  const {lang,font} = useContext(AppContext);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#BCBEC0' : '#e5e5e5';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('DoctorInfo');
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
        <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
          SALMIYA DRS
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

export default DoctorList;

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
  },
  title: {
    fontSize: 15,
    color: '#2f8cc9',
    fontFamily: Platform.OS == 'android' ?'DINMedium' :'Din Next Arabic',
  },
});
