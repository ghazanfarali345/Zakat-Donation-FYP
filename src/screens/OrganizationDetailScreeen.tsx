import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Colors, Image, ListItem, Text, View} from 'react-native-ui-lib';
import {Header} from '../components/header';

const OrganizationDetailScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View flex padding-20>
        <Header title="Organization Details" />
        <View flex-1 paddingT-20>
          <Image
            assetName="org"
            style={{
              width: '100%',
              height: 200,
            }}
            borderRadius={10}
          />
          <Text text50 marginT-10 grey10>
            Organization component
          </Text>
          <Text marginT-10 grey10>
            description Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corporis hic et fugiat inventore error beatae, sed nobis
            quidem, libero veritatis ea? Necessitatibus laudantium quas officia
            ex. Quos distinctio illo incidunt?
          </Text>
          <Text marginT-10 grey10>
            description Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corporis hic et fugiat inventore error beatae, sed nobis
            quidem, libero veritatis ea? Necessitatibus laudantium quas officia
            ex. Quos distinctio illo incidunt?
          </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('PaymentDetails' as never)}
          label={'Pay'}
          size={Button.sizes.large}
          backgroundColor={Colors.blue40}
          marginB-20
          style={{
            borderRadius: 10,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default OrganizationDetailScreen;
