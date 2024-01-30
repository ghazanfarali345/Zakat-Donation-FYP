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
    <View padding-10>
      <Text marginB-20 black text30BO>
        Zakat Calculation
      </Text>
      <TextField
        floatingPlaceholder
        floatOnFocus
        placeholder={'Username'}
        fieldStyle={{
          width: '80%',
          // borderWidth: 1,
          // borderRadius: 10,
        }}
        maxLength={30}
        padding-5
      />
      <View
        center
        marginT-20
        width={'80%'}
        height={200}
        style={{borderRadius: 20}}
        backgroundColor="lightblue">
        <Text>300</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
