import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OrganizationScreen from '../screens/OrganizationScreen';
import OrganizationDetailScreen from '../screens/OrganizationDetailScreeen';

const Stack = createStackNavigator();

export function OrganizationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Organization" component={OrganizationScreen} />
      <Stack.Screen
        name="OrganizationDetail"
        component={OrganizationDetailScreen}
      />
    </Stack.Navigator>
  );
}