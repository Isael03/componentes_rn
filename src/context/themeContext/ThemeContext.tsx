import React, {createContext, useEffect, useReducer} from 'react';
import {
  Appearance,
  AppState,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {lightTheme, themeReducer, ThemeState, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({children}: any) {
  //const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );
  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  /**Solo en ios */
  /*   useEffect(() => {
    colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  }, [colorScheme]); */

  const setDarkTheme = () => {
    console.log('setDarkTheme');
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setlightTheme');
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
