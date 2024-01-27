// navigation/MainTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
// import NotificationsScreen from '../screens/NotificationsScreen';
import {SettingStack} from './SettingNavigation';
import OrganizationScreen from '../screens/OrganizationScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Organization" component={OrganizationScreen} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
