import React, {useCallback, memo, useRef, useState, useContext} from 'react';
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
import colors from '../constants/colors';
import ION from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import i18n from '../i18n';
const styles = StyleSheet.create({
  slide: {
    height: 250,
    width: windowWidth,

    alignItems: 'center',
  },
  slideImage: {
    width: windowWidth * 0.9,
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  slideTitle: {fontSize: 24},
  slideSubtitle: {
    fontSize: 18,
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  pagination: {
    backgroundColor: '#58595b',
    width: windowWidth * 0.9,
    height: 50,
    flexDirection: 'row',
    marginLeft: 18,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    alignSelf: 'baseline',
  },
  paginationDotActive: {backgroundColor: '#fff'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1, backgroundColor: '#dedede'},
});

const slideList = Array.from({length: 5}).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

function Pagination({index, title}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '50%',
        }}>
        <Text style={styles.slideSubtitle}>{title}</Text>
      </View>
      <View style={{flexDirection: 'column', width: '50%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: 20,
          }}>
          {slideList.map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.paginationDot,
                  index === i
                    ? styles.paginationDotActive
                    : styles.paginationDotInactive,
                ]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default function Carousel() {
  const {lang,font} = useContext(AppContext);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);
  const Slide = memo(function Slide({data}) {
    return (
      <TouchableOpacity
        style={styles.slide}
        onPress={() => navigation.navigate('AboutCenter')}>
        <Image source={{uri: data.image}} style={styles.slideImage}></Image>
      </TouchableOpacity>
    );
  });
  return (
    <>
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
            <ION name="chevron-back" color="#fff" size={30}></ION>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
            {i18n.t('OurCenters', {locale: lang})}
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
        <View style={{width: '100%', height: 250, marginTop: '5%'}}>
          <FlatList
            data={slideList}
            renderItem={renderItem}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
          />
          <Pagination index={index} title="Salmiya"></Pagination>
        </View>
        <View style={{width: '100%', height: 250, marginTop: '5%'}}>
          <FlatList
            data={slideList}
            renderItem={renderItem}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
          />
          <Pagination index={index} title="Salmiya"></Pagination>
        </View>
      </SafeAreaView>
    </>
  );
}
// import React from 'react'
// import { Dimensions,StyleSheet, Text, View,SafeAreaView,TouchableHighlight,Image,TouchableOpacity } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler';
// import { SliderBox } from "react-native-image-slider-box";
// import ION from 'react-native-vector-icons/Ionicons'
// import colors from '../constants/colors'
// const data =  [

//       'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//       'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//       'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
//       'https://images.unsplash.com/photo-1568700942090-19dc36fab0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

// ]
// const OurCenters = ({navigation}) => {
//     const screenWidth = Math.round(Dimensions.get('window').width)
//     return (
//         <View style={styles.container}>
//           <View style={{paddingVertical:20,height:70,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,backgroundColor:colors.themeBlue}}>
//                <TouchableOpacity onPress={()=>navigation.goBack()}>
//                 <ION name="chevron-back" color="#fff" size={30}></ION>
//             </TouchableOpacity>
//             <Text style={{color:'#fff',fontSize:18,alignSelf:'center'}}>OUR CENTERS</Text>
//             <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')}>
//                 <ION name="menu" color="#fff" size={30}></ION>
//             </TouchableOpacity>

//             </View>
//             <View style={{width:'100%',backgroundColor:'#dedede',height:30}}></View>
//           <ScrollView style={{backgroundColor:'#fff'}}>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//           onCurrentImagePressed={()=>navigation.navigate('AboutCenter')}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 25,height:150}}/>
//           <View style={styles.bottom}>

//           <Text style={styles.text}>SHARAq</Text>
//           </View>
//           </View>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 25,height:150}}/>
//           <View style={styles.bottom}>

//             <Text style={styles.text}>SALMIYA</Text>
//           </View>
//           </View>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 25,height:150}}/>
//           <View style={styles.bottom}></View>
//           </View>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 25,height:150}}/>
//           <View style={styles.bottom}></View>
//           </View>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 5,height:150}}/>
//           <View style={styles.bottom}></View>
//           </View>
//           <View style={{width:'100%',backgroundColor:'#fff'}}>
//           <SliderBox images={data}
//            paginationBoxStyle={{
//             position: "absolute",
//             bottom:0,
//             padding: 0,

//             alignSelf: "flex-end",
//             justifyContent:"flex-end",
//             paddingBottom:10,
//             paddingRight:20
//           }} ImageComponentStyle={{ width: '90%', marginTop: 5,height:150}}/>
//           <View style={styles.bottom}></View>
//           </View>
//           </ScrollView>

//       </View>
//     )
// }

// export default OurCenters

// const styles = StyleSheet.create({
//   container:{
//    backgroundColor:'#e5e5e5',
//     flex:1
//   },
// contentStyke:{
//   paddingHorizontal:16
// },
// bottom:{
//   width:'90%',
//   height:50,
//   backgroundColor:'#58595b',
//   marginLeft:'5%',
//   borderBottomEndRadius:10,
//   borderBottomLeftRadius:10
// },
// text:{
//   color:'#fff',
//   paddingVertical:15,
//   marginLeft:20
// }

// })
