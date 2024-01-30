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

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex center>
      <Image assetName="logo" />
      <Text marginB-20 black text30BO>
        Login
      </Text>
      <TextField
        placeholder={'Username'}
        floatingPlaceholder
        fieldStyle={{
          width: '100%',
          padding: 20,
        }}
        // onChangeText={onChangeText}
        maxLength={30}
      />
      <TextField
        placeholder={'Password'}
        floatingPlaceholder
        secureTextEntry
        fieldStyle={{
          width: '100%',
          padding: 20,
        }}
        // onChangeText={onChangeText}
        maxLength={30}
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
