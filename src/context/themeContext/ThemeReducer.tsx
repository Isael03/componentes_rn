import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0, 0.6)',
};
export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dark: true,
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
  dividerColor: 'rgba(255,255,255, 0.6)',
};

export function themeReducer(
  state: ThemeState,
  action: ThemeAction,
): ThemeState {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};
      break;
    case 'set_dark_theme':
      return {...darkTheme};
      break;

    default:
      return state;
      break;
  }
}
