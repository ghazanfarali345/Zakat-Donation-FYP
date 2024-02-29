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
import {Header} from '../components/header';

const PaymentFormScreen = () => {
  const navigation = useNavigation();

  return (
    <View paddingH-10 paddingV-20 flex>
      <Header />
      <Text text50 marginT-20 marginB-10>
        Payment
      </Text>
      <View flexG-1 gap-10>
        <TextField
          marginT-10
          keyboardType="number-pad"
          placeholder={'Card no'}
          floatOnFocus={true}
          // onChangeText={onChangeText}
          value={''}
          maxLength={30}
          style={{
            borderRadius: 10,
            backgroundColor: '#ddd',
            height: 45,
            paddingHorizontal: 10,
          }}
        />
        <View row gap-20>
          <View flexG-1>
            <TextField
              keyboardType="number-pad"
              placeholder={'Expiry date'}
              floatOnFocus={true}
              value={''}
              maxLength={30}
              style={{
                borderRadius: 10,
                backgroundColor: '#ddd',
                height: 45,
                paddingHorizontal: 10,
              }}
            />
          </View>
          <View flexG-1>
            <TextField
              keyboardType="number-pad"
              placeholder={'CVC'}
              floatOnFocus={true}
              value={''}
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
      </View>
      <Button
        onPress={() => navigation.navigate('PaymentDetails' as never)}
        label={'Confirm'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentFormScreen;
