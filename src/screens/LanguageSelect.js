import React,{useContext} from 'react'
import { StyleSheet, Text, View,Image,ScrollView,Dimensions,SafeAreaView,TouchableOpacity} from 'react-native'
import Button from '../components/Button';
import colors from '../constants/colors'
import i18n from '../i18n'
import AppContext from '../context/AppContext'
const height = Dimensions.get("window").height;
const LanguageSelect = ({navigation}) => {
    
    const { lang, setLang } = useContext(AppContext)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.white}>
            <ScrollView>
            <Image style={{width:'100%',alignSelf:'center',height:500,resizeMode:'cover'}}   source={require('../assets/img/lang.jpg')} ></Image>
            <TouchableOpacity onPress={()=>{i18n.locale = 'ar';setLang('ar'),navigation.navigate('Login')}}>
            <Button style={{marginTop:10,alignSelf:'center',marginLeft:0}}  title="عربى" ></Button>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>{i18n.locale = 'en';setLang('en'),navigation.navigate('Login')}}>
                <Button   title="ENGLISH" style={{marginTop:10,marginLeft:0}}></Button>
                </TouchableOpacity>
                
            </ScrollView>
               
            </View>
            
            
        </SafeAreaView>
    )
}

export default LanguageSelect

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.themeBlue,
      height:height,
      flex: 1,
      
    },
    white:{
        width:'100%',
        padding:10,
        backgroundColor:'#fff',
        height:'95%',
        marginTop:'10%',
        
    }
})
