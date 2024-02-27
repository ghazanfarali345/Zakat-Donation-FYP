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
      <View paddingH-20 flex>
        <Header />
        <View row>
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
