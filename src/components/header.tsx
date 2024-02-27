import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Text, View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';

export function Header(props: any) {
  let navigation = useNavigation();
  return (
    <View row spread paddingV-10>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            backgroundColor="#B6CCFA"
            style={{
              borderRadius: 100,
              padding: 5,
            }}>
            <Icon name="arrowleft" size={25} color="#4087f4" />
          </View>
        </TouchableOpacity>
      </View>
      <IonIcon name="notifications-outline" size={25} color="#4087f4" />
    </View>
  );
}
