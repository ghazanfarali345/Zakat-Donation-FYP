import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OrganizationScreen from '../screens/OrganizationScreen';
import OrganizationDetailScreen from '../screens/OrganizationDetailScreeen';
import PaymentFormScreen from '../screens/PaymentForm';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

export function OrganizationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Organization" component={OrganizationScreen} />
      <Stack.Screen
        name="OrganizationDetail"
        component={OrganizationDetailScreen}
      />
      <Stack.Screen name="PaymentDetails" component={PaymentFormScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
