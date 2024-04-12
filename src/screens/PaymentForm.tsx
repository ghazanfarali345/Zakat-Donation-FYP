// import React, {Component} from 'react';
// import {StyleSheet, TouchableOpacity} from 'react-native';
// import {
//   Text,
//   Image,
//   View,
//   ListItem,
//   TextField,
//   Button,
//   Colors,
// } from 'react-native-ui-lib';
// import {useNavigation} from '@react-navigation/native';
// import {Header} from '../components/header';
// import {CardField, createToken} from '@stripe/stripe-react-native';

// const PaymentFormScreen = () => {
//   const navigation = useNavigation();

//   return (
//     // <View paddingH-10 paddingV-20 flex>
//     //   <Header />
//     //   <Text text50 marginT-20 marginB-10>
//     //     Payment
//     //   </Text>
//     //   <View flexG-1 gap-10>
//     //     <TextField
//     //       marginT-10
//     //       keyboardType="number-pad"
//     //       placeholder={'Card no'}
//     //       floatOnFocus={true}
//     //       // onChangeText={onChangeText}
//     //       value={''}
//     //       maxLength={30}
//     //       style={{
//     //         borderRadius: 10,
//     //         backgroundColor: '#ddd',
//     //         height: 45,
//     //         paddingHorizontal: 10,
//     //       }}
//     //     />
//     //     <View row gap-20>
//     //       <View flexG-1>
//     //         <TextField
//     //           keyboardType="number-pad"
//     //           placeholder={'Expiry date'}
//     //           floatOnFocus={true}
//     //           value={''}
//     //           maxLength={30}
//     //           style={{
//     //             borderRadius: 10,
//     //             backgroundColor: '#ddd',
//     //             height: 45,
//     //             paddingHorizontal: 10,
//     //           }}
//     //         />
//     //       </View>
//     //       <View flexG-1>
//     //         <TextField
//     //           keyboardType="number-pad"
//     //           placeholder={'CVC'}
//     //           floatOnFocus={true}
//     //           value={''}
//     //           maxLength={30}
//     //           style={{
//     //             borderRadius: 10,
//     //             backgroundColor: '#ddd',
//     //             height: 45,
//     //             paddingHorizontal: 10,
//     //           }}
//     //         />
//     //       </View>
//     //     </View>
//     //   </View>
//     //   <Button
//     //     onPress={() => navigation.navigate('PaymentDetails' as never)}
//     //     label={'Confirm'}
//     //     size={Button.sizes.large}
//     //     backgroundColor={Colors.blue40}
//     //     marginB-20
//     //     style={{
//     //       borderRadius: 10,
//     //     }}
//     //   />
//     // </View>
//     <View>
//       <CardField
//         postalCodeEnabled={true}
//         placeholders={{
//           number: '4242 4242 4242 4242',
//         }}
//         cardStyle={{
//           backgroundColor: '#FFFFFF',
//           textColor: '#000000',
//         }}
//         style={{
//           width: '100%',
//           height: 50,
//           marginVertical: 30,
//         }}
//         onCardChange={cardDetails => {
//           console.log('cardDetails', cardDetails);
//         }}
//         onFocus={focusedField => {
//           console.log('focusField', focusedField);
//         }}
//       />
//       <Button onPress={handlePayPress} title="Pay" disabled={loading} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default PaymentFormScreen;

import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import {
  CardField,
  useConfirmPayment,
  createToken,
  confirmPayment,
  createPaymentMethod,
} from '@stripe/stripe-react-native';
import axios from 'axios';
import {Alert} from 'react-native';
import {baseUrl} from '../constants';
import {showMessage} from 'react-native-flash-message';

const PaymentFormScreen = ({route}: any) => {
  const [cardInfo, setCardInfo] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const {id} = route.params;

  const fetchCardDetail = (cardDetail: any) => {
    // console.log("my card details",cardDetail)
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    if (!!cardInfo) {
      try {
        console.log({cardInfo});
        // let token = await createToken({...cardInfo, type: 'Card'});
        let paymentMethod = await createPaymentMethod({
          paymentMethodType: 'Card',
          paymentMethodData: cardInfo,
        });

        let paymentMethodId = paymentMethod.paymentMethod?.id;

        if (paymentMethodId) {
          let paymentSuccess = await axios.post(`${baseUrl}/payments/create`, {
            amount: 200,
            paymentMethodId,
            orgId: id,
          });
          console.log({paymentSuccess: paymentSuccess.data});
          if (paymentSuccess.data.success == true) {
            showMessage({
              message: 'Payment sent successfully',
              type: 'success',
            });
          }
        }

        console.log(paymentMethodId);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const creatPaymentIntent = (data: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:4002/payment-sheet', data)
        .then(function (res) {
          resolve(res);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
          display: 'flex', // Use flexbox to arrange fields in columns
          flexDirection: 'column',
        }}
        onCardChange={cardDetails => {
          // console.log('cardDetails', cardDetails);
          fetchCardDetail(cardDetails);
        }}
        onFocus={focusedField => {
          // console.log('focusField', focusedField);
        }}
      />
      <Button onPress={onDone} title="Pay" disabled={!cardInfo} />
    </View>
  );
};

export default PaymentFormScreen;
