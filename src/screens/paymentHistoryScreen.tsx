import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Image, ListItem, Text, View} from 'react-native-ui-lib';

const PaymentHistoryScreen = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'fifth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Sixth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Seventh Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'fifth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d79',
      title: 'Sixth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d12S',
      title: 'Seventh Item',
    },
  ];

  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <ListItem
      centerV
      onPress={() => navigation.navigate('OrganizationDetail' as never)}>
      {/* <Image assetName="org" width={40} height={40} borderRadius={100} /> */}

      <View flex row spread>
        <View>
          <Text grey10 text70 marginL-10>
            {/* {title}  */}
            Saylani Welfare Trust
          </Text>
          <Text grey10 text100 marginL-10>
            20/01/2019
          </Text>
        </View>

        <Text grey10 text70 marginL-10>
          Rs 200
        </Text>
      </View>
    </ListItem>
  );

  return (
    <View padding-20>
      <Text text50 marginV-30>
        Payment History
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaymentHistoryScreen;
