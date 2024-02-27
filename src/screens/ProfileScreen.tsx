import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Image, View, ListItem, TextField} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../components/header';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View flex>
      {/* <Header /> */}
      <View paddingH-20 flex>
        <View flex row centerV spread>
          <Text>icon</Text>
          <Text text50>My Profile</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile' as never)}>
            <Image assetName="editProfile" />
          </TouchableOpacity>
        </View>
        <View center flexG-1>
          <Image
            assetName="placeholder"
            width={100}
            height={100}
            style={{borderRadius: 100}}
          />
        </View>
        <View gap-10 flexG-2>
          <ListItem center>
            <View
              paddingL-20
              centerV
              style={{borderRadius: 30}}
              flex
              backgroundColor="lightgray">
              <Text>Ghazanfar Ali</Text>
            </View>
          </ListItem>

          <ListItem center>
            <View
              paddingL-20
              centerV
              style={{borderRadius: 30}}
              flex
              backgroundColor="lightgray">
              <Text>ghaznafarmalik345@gmail.com </Text>
            </View>
          </ListItem>

          <ListItem center>
            <View
              paddingL-20
              centerV
              style={{borderRadius: 30}}
              flex
              backgroundColor="lightgray">
              <Text>ghaznafarmalik345@gmail.com </Text>
            </View>
          </ListItem>

          <ListItem center>
            <View
              paddingL-20
              centerV
              style={{borderRadius: 30}}
              flex
              backgroundColor="lightgray">
              <Text>ghaznafarmalik345@gmail.com </Text>
            </View>
          </ListItem>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
