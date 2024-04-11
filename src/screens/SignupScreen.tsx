import React, {useState} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {
  View,
  TextField,
  Text,
  Button,
  Assets,
  Image,
  Colors,
  RadioButton,
  RadioGroup,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Alert} from 'react-native';
import {baseUrl} from '../constants';
import {showMessage} from 'react-native-flash-message';

Assets.loadAssetsGroup('icons', {
  icon1: require('../assets/Logo.png'),
});

// always use ipv4 instead localhost
// const baseUrl = 'http://192.168.1.104:3000';

const SignUpScreen = () => {
  const navigation = useNavigation();

  let [role, setRole] = useState<string>('ZAKAT_TAKER');
  let [firstName, setFirstName] = useState<string>('Ghazanfar');
  let [lastName, setLastName] = useState<string>('Ali');
  let [email, setEmail] = useState<string>('gh@yopmail.com');
  let [password, setPassword] = useState<string>('1234');
  let [address, setAddress] = useState<string>('karachi');
  let [city, setCity] = useState<string>('karaci');
  let [mobileNo, setMobileNo] = useState<string>('+923002245440');

  const handleRegister = async () => {
    try {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !address ||
        !city ||
        !mobileNo ||
        !role
      ) {
        showMessage({
          message: 'All fields are required',
          type: 'danger',
        });
        return;
      }

      let body = {
        firstName,
        lastName,
        email,
        password,
        address,
        city,
        phoneNo: mobileNo,
        role,
      };

      let res = await axios.post(`${baseUrl}/users/register`, body, {
        headers: {
          'content-type': 'application/json',
        },
      });

      if (res.data.success) {
        showMessage({
          message: 'Your request has been sent to the admin',
          type: 'info',
        });
      }
    } catch (error: any) {
      if (error.response.data.status == '409') {
        showMessage({
          message: error.response.data.message,
          type: 'danger',
        });
      }
    }
  };

  return (
    <View flex center marginT-30 paddingH-20>
      <Image assetName="logo" />
      <Text marginB-20 black text30BO>
        Register
      </Text>
      <ScrollView style={{width: '100%'}}>
        <RadioGroup
          center
          row
          gap-10
          initialValue={role}
          onValueChange={(value: any) => setRole(value)}>
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
        </RadioGroup>
        <View center gap-20 marginV-20>
          <TextField
            placeholder={'First Name'}
            fieldStyle={{
              width: '100%',
            }}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
          <TextField
            placeholder={'Last Name'}
            fieldStyle={{
              width: '100%',
            }}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
            onChangeText={text => setLastName(text)}
            value={lastName}
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
            onChangeText={text => setEmail(text)}
            value={email}
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
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TextField
            placeholder={'Mobile No'}
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
            onChangeText={text => setMobileNo(text)}
            value={mobileNo}
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
            onChangeText={text => setAddress(text)}
            value={address}
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
            onChangeText={text => setCity(text)}
            value={city}
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
            onPress={handleRegister}
          />
          <Text>
            Don't have an account?{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('Login' as never)}>
              <Text blue40>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
