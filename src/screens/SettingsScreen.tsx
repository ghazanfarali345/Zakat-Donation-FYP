import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Button,
  Colors,
  Image,
  ListItem,
  Switch,
  Text,
  View,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {isAuthHandler} from '../redux/slices/userReducer';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let saveData = async (value: any) => {
    await AsyncStorage.setItem('isAuth', JSON.stringify(false));

    // let data = await AsyncStorage.getItem('isAuth');
    // console.warn(data);
    navigation.navigate('Login' as never);
  };
  return (
    <View flex paddingH-15>
      <Text text50 marginT-30 marginB-10>
        Settings
      </Text>
      <ScrollView style={{flex: 1}}>
        {/* <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => console.log('pressed')}>
          <View flex row gap-10>
            <Image assetName="notification" />
            <Text grey10>Notifications</Text>
          </View>
          <View>
            <Switch
              value={false}
              onValueChange={() => console.log('value changed')}
            />
          </View>
        </ListItem> */}
        <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('ChangePassword' as never)}>
          <View flex row gap-10>
            <Image assetName="changePassword" />
            <Text grey10>Change Password</Text>
          </View>
        </ListItem>
        <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('EditProfile' as never)}>
          <View flex row gap-10>
            {/* <Image assetName="profile" /> */}
            <FeatherIcon name="user" size={25} color={Colors.iconColor} />
            <Text grey10>Profile</Text>
          </View>
        </ListItem>
        <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Blog' as never)}>
          <View flex row gap-10>
            <Image
              assetName="blogIcon"
              width={23}
              height={23}
              tintColor={Colors.iconColor}
            />
            {/* <FontAwesome5Icons name="blog" size={25} color={Colors.iconColor} /> */}
            <Text grey10>Blogs</Text>
          </View>
        </ListItem>
        <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('PaymentHistory' as never)}>
          <View flex row gap-10>
            {/* <Image assetName="profile" /> */}
            <MaterialCommunityIcons
              name="history"
              size={25}
              color={Colors.iconColor}
            />
            <Text grey10>Zakat History</Text>
          </View>
        </ListItem>
      </ScrollView>
      <Button
        label={'Logout'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
        onPress={() => {
          dispatch(isAuthHandler({isAuth: false}));
        }}
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
