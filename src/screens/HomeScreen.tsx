import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  TextField,
  Button,
  View,
  Text,
  Assets,
  Image,
  Colors,
} from 'react-native-ui-lib';

const HomeScreen = () => {
  return (
    <View flex padding-10>
      <Text marginB-20 black text30BO>
        Zakat Calculation
      </Text>
      <TextField
        floatingPlaceholder
        floatOnFocus
        placeholder={'Calculate Zakat'}
        fieldStyle={{
          width: '80%',
          // borderWidth: 1,
          // borderRadius: 10,
        }}
        maxLength={30}
        padding-5
      />
      <View center flexG-1>
        <Text text50>Payable Amount</Text>
        <Text text20 green20>
          Rs. 0
        </Text>
      </View>
      <Button
        label={'Calculate'}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
