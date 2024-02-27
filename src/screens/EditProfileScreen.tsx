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
    <View paddingH-20 flex>
      <Header />
      {/* <View flex row center> */}
      {/* <Text text50>Edit Profile</Text> */}
      {/* </View> */}
      <View center flexG-1>
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
      <View gap-10 flexG-2>
        <TextField
          placeholder={'Username'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
          // onChangeText={onChangeText}
          value={''}
          maxLength={30}
        />
        <TextField
          placeholder={'Address'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
          value={'xyz street karachi'}
          // onChangeText={onChangeText}
          maxLength={30}
        />
        <TextField
          placeholder={'Address'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
          value={'xyz street karachi'}
          // onChangeText={onChangeText}
          maxLength={30}
        />
        <TextField
          placeholder={'Address'}
          floatingPlaceholder
          fieldStyle={{
            width: '100%',
            // padding: 20,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
          value={'xyz street karachi'}
          // onChangeText={onChangeText}
          maxLength={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditProfileScreen;
