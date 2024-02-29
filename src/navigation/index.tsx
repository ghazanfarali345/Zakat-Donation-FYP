import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import MainTabNavigator from './MainTabNavigation';
import {AuthStack} from './AuthNavigations';

export default function ManiNavigation() {
  let state = useSelector((state: RootState) => state.user);
  return (
    <>
      <NavigationContainer>
        <>{state.isAuth ? <MainTabNavigator /> : <AuthStack />}</>
      </NavigationContainer>
    </>
  );
}
