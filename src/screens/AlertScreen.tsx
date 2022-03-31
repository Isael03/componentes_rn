import React from 'react';
import {Alert, Button, Platform, StyleSheet, Text, View} from 'react-native';

import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export default function AlertScreen() {
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true, onDismiss: () => console.log('onDismiss Pressed')},
    );
  };

  const showPrompt = () => {
    if (Platform.OS == 'ios') {
      Alert.prompt(
        '¿Está seguro?',
        '¿Esta acción no se puede revertir',
        (valor: string) => console.log('info: ', valor),
        'plain-text',
      );
      return;
    }

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
}
