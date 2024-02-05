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

  const [password, setPassword] = useState<string>();

  return (
    <>
      <Header title="Change Password" />
      <View paddingH-20 flex>
        <View row center marginT-20>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Text>icon</Text> */}
          </TouchableOpacity>
          <Text text50 p>
            Change Password
          </Text>
        </View>

        <View flexG-1 paddingV-30>
          <TextField
            placeholder={'Change Password'}
            floatingPlaceholder
            secureTextEntry
            fieldStyle={{
              width: '100%',
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => setPassword(text)}
            value={password}
            maxLength={30}
          />
        </View>
        <Button
          label={'Save'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ChangePasswordScreen;
