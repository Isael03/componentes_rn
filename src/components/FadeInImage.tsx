import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import useAnimation from '../hooks/useAnimation';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export default function FadeInImage({uri, style}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const {opacity, fadeIn} = useAnimation();

  function finishLoading() {
    setIsLoading(false);
    fadeIn();
  }
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color="#5856D6"
          size={30}
          style={{position: 'absolute'}}
        />
      )}

      <Animated.Image
        source={{uri}}
        style={{...(style as any), opacity}}
        onLoadEnd={() => finishLoading()}
      />
    </View>
  );
}
