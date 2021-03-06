import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import RootNavigation from './RootNavigation';


export default createRouter(() => ({
  home: () => HomeScreen,
  links: () => LinksScreen,
  settings: () => SettingsScreen,
  about: () => AboutScreen,
  rootNavigation: () => RootNavigation,
}));
