import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  View,
  TextField,
  Text,
  Button,
  Assets,
  Image,
  Colors,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {isAuthHandler} from '../redux/slices/userReducer';
import {useDispatch} from 'react-redux';

const RegisterButtonScreen = () => {
  const navigation = useNavigation();

  return (
    <View flex center>
      <Image assetName="logo" />

      <Text marginB-20 black text50 center>
        Zakat Automation System
      </Text>

      <View marginT-20 center>
        <Button
          label={'Register'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
          fullWidth
          style={{
            paddingHorizontal: 100,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('SignUp' as never)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterButtonScreen;
