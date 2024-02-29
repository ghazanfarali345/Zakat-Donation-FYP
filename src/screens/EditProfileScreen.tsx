import React, {Component} from 'react';
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

const EditProfileScreen = () => {
  const navigation = useNavigation();

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
            placeholder={'Username'}
            fieldStyle={{
              width: '100%',
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            // onChangeText={onChangeText}
            value={'ghazanfar'}
            maxLength={30}
            style={{
              borderRadius: 10,
              backgroundColor: '#ddd',
              height: 45,
              paddingHorizontal: 10,
            }}
          />
          <TextField
            placeholder={'email'}
            fieldStyle={{
              width: '100%',
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={'ghazanfar@yopmail.com'}
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
              // padding: 20,
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
            }}
            value={'Zabun Nisa Street, Saddar, Karachi'}
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
            value={'+92300 1122334'}
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
        onPress={() => {}}
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProfileScreen;
