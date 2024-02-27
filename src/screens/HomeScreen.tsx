import React, {Component, useState} from 'react';
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
  const [amount, setAmount] = useState<string>();
  const [calculatedZakat, setCalculatedZakat] = useState<string>('0');

  const handleCalculateZakat = () => {
    try {
      if (amount && +amount > 0) {
        let zakat = (Number(amount) / 100) * 2.5;
        let zakatCopy = zakat.toFixed(1) as unknown as string;
        setCalculatedZakat(zakatCopy);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <View flex padding-20>
      <Text h1>Zakat Calculation</Text>
      <TextField
        floatingPlaceholder
        floatOnFocus
        keyboardType="number-pad"
        placeholder={'Calculate Zakat'}
        fieldStyle={{
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}
        value={amount}
        onChangeText={text => setAmount(text)}
        hint={amount as unknown as string}
        maxLength={30}
        padding-5
      />
      <View center flexG-1>
        <Text text50>Payable Amount</Text>
        <Text text20 green20>
          Rs. {calculatedZakat}
        </Text>
      </View>
      <Button
        label={'Calculate'}
        onPress={handleCalculateZakat}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
      <Button
        label={'Clear'}
        onPress={() => {
          setAmount('');
          setCalculatedZakat('0');
        }}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
