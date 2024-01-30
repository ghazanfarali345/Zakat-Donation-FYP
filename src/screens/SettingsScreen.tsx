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
      <Text text50 marginV-30>
        Settings
      </Text>
      <ScrollView style={{flex: 1}}>
        <ListItem
          style={{
            borderTopColor: 'lightgray',
            borderTopWidth: 1,
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
          style={{borderTopColor: 'lightgray', borderTopWidth: 1}}
          onPress={() => console.log('pressed')}>
          <View flex row gap-10>
            <Image assetName="changePassword" />
            <Text grey10>Change Password</Text>
          </View>
        </ListItem>
        <ListItem
          style={{borderTopColor: 'lightgray', borderTopWidth: 1}}
          onPress={() => navigation.navigate('Profile' as never)}>
          <View flex row gap-10>
            <Image assetName="profile" />
            <Text grey10>Profile</Text>
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
