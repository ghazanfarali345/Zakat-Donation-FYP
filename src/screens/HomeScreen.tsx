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
import {useDispatch} from 'react-redux';
import {setZakatAmount, resetZakatAmount} from '../redux/slices/userReducer';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<string>();
  const [calculatedZakat, setCalculatedZakat] = useState<string>('0');

  const handleCalculateZakat = () => {
    try {
      if (amount && +amount > 0) {
        let zakat = (Number(amount) / 100) * 2.5;
        let zakatCopy = zakat.toFixed(1) as unknown as string;
        setCalculatedZakat(zakatCopy);

        dispatch(setZakatAmount({zakat_amount: zakatCopy}));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleSelectOrg = () => {
    // navigation.navigate('CheckoutScreen');
    navigation.navigate('Settings', {
      screen: 'CheckoutScreen',
    });
  };

  return (
    <View flex padding-20>
      <Text h1>Zakat Calculation</Text>
      <TextField
        keyboardType="number-pad"
        placeholder={'Calculate Zakat'}
        value={amount}
        onChangeText={text => setAmount(text)}
        hint={amount as unknown as string}
        maxLength={30}
        padding-5
        style={{
          borderRadius: 10,
          backgroundColor: '#ddd',
          height: 45,
          paddingHorizontal: 10,
        }}
      />
      <View center flexG-1>
        <Text text50>Payable Amount</Text>
        <Text text20 green20>
          Rs. {calculatedZakat}
        </Text>
      </View>
      <View row spread gap-10>
        <Button
          flex
          label={'Calculate'}
          onPress={handleCalculateZakat}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
        />
        <Button
          flex
          label={'Clear'}
          onPress={() => {
            dispatch(resetZakatAmount());

            setAmount('');
            setCalculatedZakat('0');
          }}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
        />
      </View>
      <Button
        label={'Pay'}
        onPress={handleSelectOrg}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
