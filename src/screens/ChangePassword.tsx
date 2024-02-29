import React, {Component, useState} from 'react';
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

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState<string>('12345');

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
            onChangeText={text => setPassword(text)}
            value={password}
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
            onChangeText={text => setPassword(text)}
            value={password}
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
            onChangeText={text => setPassword(text)}
            value={password}
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
