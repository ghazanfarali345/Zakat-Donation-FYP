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

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let saveData = async (value: any) => {
    dispatch(isAuthHandler({isAuth: true}));
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
        // onChangeText={onChangeText}
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
        // onChangeText={onChangeText}
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
          onPress={() => saveData(true)}
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
