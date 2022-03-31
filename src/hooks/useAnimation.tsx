import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';

export default function useAnimation() {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      //easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
}
