import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {Card, Image, ListItem, Text, View} from 'react-native-ui-lib';
import {baseUrl} from '../constants';

const OrganizationScreen = ({navigation}: any) => {
  // const navigation = useNavigation();
  const [orgs, setOrgs] = useState<any>([]);

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

  const handleList = async () => {
    let res = await axios.get(`${baseUrl}/users/organizations`);
    if (res.data.success) {
      setOrgs(res.data.data);
    }
  };

  useEffect(() => {
    handleList();
  }, []);

  type ItemProps = {title: string};

  const Item = (prop: any) => (
    <Card marginT-10 padding-10 enableShadow>
      <ListItem
        centerV
        style={{
          height: 'auto',
        }}
        onPress={() =>
          navigation.navigate('OrganizationDetail', {data: prop.item})
        }>
        <Image assetName="org" width={40} height={40} borderRadius={100} />
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
    <View paddingH-20>
      <Text text50 marginT-40 marginB-20>
        Organizations
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
  );
};

const styles = StyleSheet.create({});

export default OrganizationScreen;
