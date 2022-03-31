import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => setLightTheme()}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            borderRadius: 20,
            height: 50,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDarkTheme()}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            borderRadius: 20,
            height: 50,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
