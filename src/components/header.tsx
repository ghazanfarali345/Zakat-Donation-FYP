import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Text, View} from 'react-native-ui-lib';

export function Header(props: any) {
  let navigation = useNavigation();
  return (
    <View row spread paddingH-20 paddingV-20>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image assetName="backIcon" width={20} height={20} />
      </TouchableOpacity>
      <Text text50> {props.title}</Text>
      <Image assetName="notification" width={20} height={20} />
    </View>
  );
}
