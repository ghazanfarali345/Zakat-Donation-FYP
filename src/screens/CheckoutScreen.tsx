import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  TextField,
  Button,
  View,
  Text,
  Assets,
  Image,
  Colors,
  Card,
  ListItem,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {baseUrl} from '../constants';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {showMessage} from 'react-native-flash-message';
import {useFocusEffect} from '@react-navigation/native';

const CheckoutScreen = ({navigation}: any) => {
  const [amount, setAmount] = useState<string>();
  const [orgs, setOrgs] = useState<any>([]);
  const [selectedOrg, setSelectedOrg] = useState<{[index: string]: string}>();

  let zakat_amount = useSelector((state: RootState) => state.user.zakat_amount);

  const handleSelectOrg = () => {
    if (!amount) {
      showMessage({
        message: 'Amount field is required ',
        type: 'danger',
      });
      return;
    }

    if (!selectedOrg) {
      showMessage({
        message: 'Please select an organization',
        type: 'danger',
      });
      return;
    }

    if (+amount <= 500) {
      showMessage({
        message: 'Amount should be greater than 500',
        type: 'danger',
      });
      return;
    }

    navigation.navigate('Organizations', {
      screen: 'PaymentDetails',
      params: {
        id: selectedOrg!._id,
        amount,
        orgName: `${selectedOrg.firstName} ${selectedOrg.lastName}`,
      },
    });
  };

  const handleList = async () => {
    let res = await axios.get(`${baseUrl}/users/organizations`);
    if (res.data.success) {
      setOrgs(res.data.data);
    }
  };

  useEffect(() => {
    handleList();
  }, []);

  useEffect(() => {
    console.log({zakat_amount});
    navigation.addListener('focus', () => {
      // Do something when the screen blurs
      setAmount(zakat_amount);
    });

    const unsubscribe = navigation.addListener('blur', () => {
      // Do something when the screen blurs
      setAmount('');
      setSelectedOrg({});
    });

    return unsubscribe;
  }, [zakat_amount, navigation]);

  const Item = (prop: any) => (
    // <TouchableOpacity onPress={}>
    <Card
      marginT-10
      padding-10
      enableShadow
      style={{
        backgroundColor:
          selectedOrg?._id === prop.item._id ? 'lightgray' : 'white',
      }}>
      <ListItem
        centerV
        style={{
          height: 'auto',
        }}
        onPress={
          () => setSelectedOrg(prop.item)
          // navigation.navigate('OrganizationDetail', {data: prop.item})
        }>
        <Image assetName="org" width={20} height={20} borderRadius={100} />
        <View marginL-10>
          <Text grey10 text70>
            {`${prop.item.firstName} ${prop.item.lastName}`}
          </Text>
          {/* <Text grey30 text3>
            {title}
          </Text> */}
        </View>
      </ListItem>
    </Card>
  );

  return (
    <View flex>
      <View flex padding-20>
        <Text h1>Checkout Page</Text>
        <Text h4>Amount</Text>
        <TextField
          keyboardType="number-pad"
          placeholder={'Calculate Zakat'}
          value={amount}
          onChangeText={text => setAmount(text)}
          hint={amount as unknown as string}
          maxLength={30}
          paddingV-5
          style={{
            borderRadius: 10,
            backgroundColor: '#ddd',
            height: 45,
            paddingHorizontal: 10,
          }}
        />

        <View>
          <Text text60BL marginT-30>
            Select Organization
          </Text>
          <FlatList
            data={orgs}
            ListEmptyComponent={() => <Text>No record found</Text>}
            renderItem={({item}) => (
              <Item title={`${item.firstName} ${item.lastName}`} item={item} />
            )}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
      <Button
        label={'Proceed'}
        onPress={handleSelectOrg}
        size={Button.sizes.large}
        backgroundColor={Colors.blue40}
        marginB-20
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CheckoutScreen;
