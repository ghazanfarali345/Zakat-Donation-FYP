import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Image, View, ListItem, TextField} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View paddingH-20 flex>
      <View flex row center>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Text>icon</Text> */}
        </TouchableOpacity>
        <Text text50>Edit Profile</Text>
      </View>
      <View center flexG-1 style={{position: 'relative'}}>
        <Image
          assetName="placeholder"
          width={100}
          height={100}
          style={{borderRadius: 100}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile' as never)}>
          <Image
            assetName="editProfile"
            style={{
              position: 'absolute',
              top: -25,
              left: 25,
              tintColor: 'red',
            }}
          />
        </TouchableOpacity>
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
