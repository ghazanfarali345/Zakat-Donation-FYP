import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Image,
  View,
  ListItem,
  TextField,
  Button,
  Colors,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../components/header';
import axios from 'axios';
import {baseUrl} from '../constants';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

  const {user, token} = useSelector((state: any) => state.user);

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSaveProfile = async () => {
    console.log('Press');
    try {
      setLoading(true);

      let body = {
        type: 'CHANGE_PASSWORD',
        email: user.email,
        oldPassword,
        newPassword,
        confirmNewPassword,
      };

      let res = await axios.post(`${baseUrl}/users/changePassword/`, body, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      console.log('hello 3');

      if (res.data.success) {
        showMessage({
          message: res.data.message,
          type: 'info',
        });
      }
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.data.status == '403') {
        showMessage({
          message: error.response.data.error,
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'Something went wrong',
          type: 'danger',
        });
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View padding-20 flex>
        <Header />
        <View row marginT-15>
          <TouchableOpacity
            onPress={() => navigation.goBack()}></TouchableOpacity>
          <Text text50>Change Password</Text>
        </View>

        <View flexG-1 paddingV-20 gap-10>
          <TextField
            placeholder={'Old Password'}
            secureTextEntry
            fieldStyle={{
              width: '100%',
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => setOldPassword(text)}
            value={oldPassword}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
          />
          <TextField
            placeholder={'New Password'}
            secureTextEntry
            fieldStyle={{
              width: '100%',
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => setNewPassword(text)}
            value={newPassword}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
          />
          <TextField
            placeholder={'Confirm New Password'}
            secureTextEntry
            fieldStyle={{
              width: '100%',
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => setConfirmNewPassword(text)}
            value={confirmNewPassword}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
          />
        </View>
        <Button
          onPress={handleSaveProfile}
          disabled={isLoading}
          label={'Save'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
          style={{
            borderRadius: 10,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ChangePasswordScreen;
