import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';
import Animation01Screen from '../screens/Animation01Screen';
import Animation02Screen from '../screens/Animation02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextnputScreen from '../screens/TextnputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {View} from 'react-native';

const Stack = createStackNavigator();

export function Navigation() {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName="HomeScreens"
          screenOptions={{
            headerShown: false,
            cardStyle: {
              //backgroundColor: 'white',
            },
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreens} />
          <Stack.Screen
            name="Animation01Screen"
            component={Animation01Screen}
          />
          <Stack.Screen
            name="Animation02Screen"
            component={Animation02Screen}
          />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextnputScreen" component={TextnputScreen} />
          <Stack.Screen
            name="PullToRefreshScreen"
            component={PullToRefreshScreen}
          />
          <Stack.Screen
            name="CustomSectionListScreen"
            component={CustomSectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
