import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Modal} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export default function ModalScreen() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="Modal Screen" />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({});
