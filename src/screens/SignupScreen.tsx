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
      <Image assetName="icon1" />
      <Text marginB-20 black text30BO>
        Register
      </Text>

      <View center row gap-10>
        <RadioButton
          value={'user'}
          backgroundColor="#C6C6C6"
          paddingH-10
          paddingV-12
          borderRadius={10}
          label={'User'}
        />
        <RadioButton
          value={'organzation'}
          backgroundColor="#C6C6C6"
          paddingH-10
          paddingV-12
          borderRadius={10}
          label={'Organization'}
        />
      </View>
      <View center gap-20 marginV-20>
        <TextField
          placeholder={'Name'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
          }}
          // onChangeText={onChangeText}
          maxLength={30}
        />
        <TextField
          placeholder={'Email'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
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
            // padding: 20,
          }}
          // onChangeText={onChangeText}
          maxLength={30}
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
