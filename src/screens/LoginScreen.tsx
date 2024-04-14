import React, {Component, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
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

import {showMessage, hideMessage} from 'react-native-flash-message';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {addToken, addUser, isAuthHandler} from '../redux/slices/userReducer';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {baseUrl} from '../constants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('gh@yopmail.com');
  const [password, setPassword] = useState<string>('12345');

  let handleLogin = async (value: any) => {
    try {
      if (!email || !password) {
        showMessage({
          message: 'Email or Password is required',
          type: 'danger',
        });
      }

      let res = await axios.post(`${baseUrl}/users/login`, {email, password});

      if (res.data.success == true && res.data.token) {
        dispatch(isAuthHandler({isAuth: true}));
        dispatch(addToken({token: res.data.token}));
        dispatch(addUser({user: res.data.data}));
      }
    } catch (error: any) {
      showMessage({
        message: error.response.data.message,
        type: 'danger',
      });
    }
  };

  return (
    <View flex center>
      <Image assetName="logo" />
      <Text marginB-20 black text30BO>
        Login
      </Text>
      <TextField
        placeholder={'Username'}
        fieldStyle={{
          width: '100%',
          padding: 20,
        }}
        onChangeText={text => setEmail(text)}
        maxLength={30}
        style={{
          borderRadius: 10,
          backgroundColor: '#ddd',
          height: 45,
          paddingHorizontal: 10,
        }}
      />
      <TextField
        placeholder={'Password'}
        secureTextEntry
        fieldStyle={{
          width: '100%',
          padding: 20,
        }}
        onChangeText={text => setPassword(text)}
        maxLength={30}
        style={{
          borderRadius: 10,
          backgroundColor: '#ddd',
          height: 45,
          paddingHorizontal: 10,
        }}
      />
      <View marginT-100 center>
        <Button
          label={'Login'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
          fullWidth
          style={{
            paddingHorizontal: 100,
            borderRadius: 10,
          }}
          onPress={() => handleLogin(true)}
        />
        <Text>
          Don't have an account?{' '}
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp' as never)}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
