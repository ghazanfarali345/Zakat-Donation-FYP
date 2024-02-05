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

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex paddingH-15>
      <Text text50 marginT-30 marginB-10>
        Settings
      </Text>
      <ScrollView style={{flex: 1}}>
        <ListItem
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
        </ListItem>
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
          onPress={() => navigation.navigate('Profile' as never)}>
          <View flex row gap-10>
            <Image assetName="profile" />
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
            <Image assetName="profile" />
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
            <Image assetName="profile" />
            <Text grey10>Zakat History</Text>
          </View>
        </ListItem>
      </ScrollView>
      <Button
        label={'Logout'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
