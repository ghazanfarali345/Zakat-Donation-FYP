import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Image,
  View,
  ListItem,
  TextField,
  Button,
  Colors,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

const PaymentFormScreen = () => {
  const navigation = useNavigation();

  return (
    <View paddingH-10 flex>
      <View flexG-1 gap-10>
        <TextField
          marginT-40
          placeholder={'Card no'}
          floatingPlaceholder
          floatOnFocus={true}
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
        <View row gap-20>
          <View flexG-1>
            <TextField
              placeholder={'Expiry date'}
              floatingPlaceholder
              floatOnFocus={true}
              fieldStyle={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
              }}
              value={''}
              maxLength={30}
            />
          </View>
          <View flexG-1>
            <TextField
              placeholder={'CVC'}
              floatOnFocus={true}
              floatingPlaceholder
              fieldStyle={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
              }}
              value={''}
              maxLength={30}
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate('PaymentDetails' as never)}
        label={'Confirm'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentFormScreen;
