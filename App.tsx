/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';
import * as AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer, useFocusEffect} from '@react-navigation/native';

import MainTabNavigator from './src/navigation/MainTabNavigation';
import {AuthStack} from './src/navigation/AuthNavigations';

import {RootState, store} from './src/redux/store';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
import {StripeProvider} from '@stripe/stripe-react-native';
import {stripe_public_key} from './src/constants';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  let authKey = 'isAuth';

  let [isAuthenticated, setIsAuthenticated] = useState<
    string | boolean | null
  >();

  let readData = async () => {
    let data = await AsyncStorage.default.getItem(authKey);
    setIsAuthenticated(data);
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <Provider store={store}>
      <StripeProvider publishableKey={stripe_public_key}>
        <Navigation />
      </StripeProvider>
    </Provider>
  );
}

export default App;
