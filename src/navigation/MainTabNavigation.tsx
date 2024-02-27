// navigation/MainTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
// import NotificationsScreen from '../screens/NotificationsScreen';
import {SettingStack} from './SettingNavigation';
import OrganizationScreen from '../screens/OrganizationScreen';

import {Assets, Image, Typography, Colors} from 'react-native-ui-lib';
import {OrganizationStack} from './OrganizationNavigation';

const Tab = createBottomTabNavigator();

Assets.loadAssetsGroup('icons', {
  logo: require('../assets/Logo.png'),
  history: require('../assets/Setting.png'),
  notification: require('../assets/Notification.png'),
  changePassword: require('../assets/changePassword.png'),
  profile: require('../assets/Profile.png'),
  home: require('../assets/Home.png'),
  placeholder: require('../assets/Placeholder.jpg'),
  editProfile: require('../assets/Edit-Profile.png'),
  org: require('../assets/saylani.png'),
  orgIcon: require('../assets/Organization.png'),
  backIcon: require('../assets/backIcon.png'),
  blogIcon: require('../assets/blogIcon1.png'),
});

Colors.loadColors({
  iconColor: '#498FFA',
});
Typography.loadTypographies({
  h1: {fontSize: 26, fontWeight: '600', lineHeight: 80},
  h2: {fontSize: 46, fontWeight: '400', lineHeight: 64},
});

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Image assetName="home" />,
        }}
      />
      <Tab.Screen
        name="Organizations"
        component={OrganizationStack}
        options={{
          tabBarLabel: 'Organization',
          tabBarIcon: ({color, size}) => (
            <Image
              assetName="orgIcon"
              width={25}
              height={25}
              tintColor="#2979F2"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => <Image assetName="history" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
