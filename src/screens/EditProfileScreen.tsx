import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Text,
  Image,
  View,
  ListItem,
  TextField,
  Colors,
  Button,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../components/header';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {baseUrl} from '../constants';
import {showMessage} from 'react-native-flash-message';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const {user, token} = useSelector((state: any) => state.user);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [mobileNo, setMobileNo] = useState<string>('');

  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      console.log({user});
      setAddress(user.address);
      setCity(user.city);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setMobileNo(user.phoneNo);
    }
  }, [user]);

  const handleSaveProfile = async () => {
    console.log('Press');
    try {
      setLoading(true);

      console.log('hello');

      let body = {
        firstName,
        lastName,
        address,
        city,
        phoneNo: mobileNo,
      };

      console.log('hello 2');

      let res = await axios.put(`${baseUrl}/users/${user._id}`, body, {
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
      showMessage({
        message: 'Something went wrong',
        type: 'danger',
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const ImagePicker = () => {
    console.warn('image');
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.6,
      },
      () => {
        console.log('image');
      },
    ).catch(err => {
      console.warn(err.message);
    });
  };

  return (
    <View padding-20 flex>
      <Header />
      <View marginT-20 flexG-1>
        <View center>
          <View>
            <Image
              assetName="placeholder"
              width={100}
              height={100}
              style={{borderRadius: 100}}
            />
            <TouchableOpacity
              onPress={() => ImagePicker()}
              style={{
                position: 'absolute',
                top: 60,
                left: 50,
                padding: 20,
              }}>
              {/* <Image
              assetName="editProfile"
              style={{
                tintColor: 'red',
              }}
            /> */}
              <AntDesignIcons name="edit" size={25} color={Colors.iconColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View marginT-20 gap-10 flexG-1>
          <TextField
            placeholder={'First name'}
            fieldStyle={{
              width: '100%',
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            onChangeText={text => setFirstName(text)}
            value={firstName}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
          />
          <TextField
            placeholder={'Last name'}
            fieldStyle={{
              width: '100%',
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={lastName}
            onChangeText={text => setLastName(text)}
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
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={address}
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
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={city}
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
            placeholder={'Phone No'}
            fieldStyle={{
              width: '100%',
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={mobileNo}
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
      </View>
      <Button
        label={'Save'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
        onPress={handleSaveProfile}
        disabled={isLoading}
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProfileScreen;
