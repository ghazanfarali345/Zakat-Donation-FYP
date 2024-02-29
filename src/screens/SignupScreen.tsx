import {Link} from '@react-navigation/native';
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
  RadioButton,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

Assets.loadAssetsGroup('icons', {
  icon1: require('../assets/Logo.png'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex center paddingH-20>
      <Image assetName="logo" />
      <Text marginB-20 black text30BO>
        Register
      </Text>

      <View center row gap-10>
        <RadioButton
          size={20}
          value={'Zakat Giver'}
          paddingH-10
          paddingV-12
          borderRadius={100}
          label={'User'}
        />
        <RadioButton
          size={20}
          value={'Zakat Taker'}
          paddingH-10
          paddingV-12
          borderRadius={100}
          label={'Organization'}
        />
      </View>
      <View center gap-20 marginV-20>
        <TextField
          placeholder={'First Name'}
          fieldStyle={{
            width: '100%',
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
          placeholder={'Last Name'}
          fieldStyle={{
            width: '100%',
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
          placeholder={'Email'}
          fieldStyle={{
            width: '100%',
          }}
          style={{
            borderRadius: 10,
            backgroundColor: '#ddd',
            height: 45,
            paddingHorizontal: 10,
          }}
          // onChangeText={onChangeText}
          maxLength={30}
        />
        <TextField
          placeholder={'Password'}
          secureTextEntry
          fieldStyle={{
            width: '100%',
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
          placeholder={'Address'}
          fieldStyle={{
            width: '100%',
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
          placeholder={'Address'}
          fieldStyle={{
            width: '100%',
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
          placeholder={'City'}
          fieldStyle={{
            width: '100%',
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
      </View>
      <View marginT-20 center>
        <Button
          label={'Signup'}
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
            onPress={() => navigation.navigate('Login' as never)}>
            <Text blue40>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
