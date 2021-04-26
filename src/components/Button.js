import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../constants/colors';

const Button = ({title, onPress, backgroundColor, loading, style}) => {
  return (
    
      <View
        style={[
          styles.container,
          backgroundColor && {backgroundColor: backgroundColor},
          style && style,
        ]}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={[styles.text, {fontFamily: 'Din Next Arabic'}]}>
            {title}
          </Text>
        )}
      </View>
    
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeBlue,
    height: 50,
    width: '100%',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'DINMedium',
  },
});
