// import React, {Component, useState} from 'react';
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
// import {useStripe} from '@stripe/stripe-react-native';
// import axios from 'axios';
// import {baseUrl} from '../constants';
// import {showMessage} from 'react-native-flash-message';

// const PaymentFormScreen = ({route, navigation}: any) => {
//   // const navigation = useNavigation();

//   const {createPaymentMethod, createToken} = useStripe();

//   const {id, orgName} = route.params;

//   const [amount, setAmount] = useState<string>();
//   const [cardNo, setCardNo] = useState<string>();
//   const [expDate, setExpDate] = useState<string>();
//   const [cvc, setCVC] = useState<string>();

//   const onDone = async () => {
//     try {
//       let token = await createToken({
//         type: 'Card',
//         name: ' string',
//         address: {
//           city: 'string;',
//           country: 'string;',
//           line1: 'string;',
//           line2: 'string;',
//           postalCode: 'string;',
//           state: 'string;',
//         },
//         currency: '',
//       });
//       let paymentMethod = await createPaymentMethod({
//         paymentMethodType: 'Card',
//         paymentMethodData: {},
//       });

//       let paymentMethodId = paymentMethod.paymentMethod?.id;

//       if (paymentMethodId) {
//         let paymentSuccess = await axios.post(`${baseUrl}/payments/create`, {
//           amount: 200,
//           paymentMethodId,
//           orgId: id,
//           orgName,
//         });
//         console.log({paymentSuccess: paymentSuccess.data});
//         if (paymentSuccess.data.success == true) {
//           showMessage({
//             message: 'Payment sent successfully',
//             type: 'success',
//           });
//         }
//       }

//       console.log(paymentMethodId);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View paddingH-10 paddingV-20 flex>
//       <Header />
//       <Text text50 marginT-20 marginB-10>
//         Payment
//       </Text>
//       <View flexG-1 gap-10>
//         <TextField
//           marginT-10
//           keyboardType="number-pad"
//           placeholder={'Amount'}
//           floatOnFocus={true}
//           onChangeText={text => setAmount(text)}
//           value={amount}
//           maxLength={30}
//           style={{
//             borderRadius: 10,
//             backgroundColor: '#ddd',
//             height: 45,
//             paddingHorizontal: 10,
//           }}
//         />
//         <TextField
//           marginT-10
//           keyboardType="number-pad"
//           placeholder={'Card no'}
//           floatOnFocus={true}
//           onChangeText={text => setCardNo(text)}
//           value={''}
//           maxLength={30}
//           style={{
//             borderRadius: 10,
//             backgroundColor: '#ddd',
//             height: 45,
//             paddingHorizontal: 10,
//           }}
//         />
//         <View row gap-20>
//           <View flexG-1>
//             <TextField
//               onChangeText={text => setExpDate(text)}
//               keyboardType="number-pad"
//               placeholder={'Expiry date'}
//               floatOnFocus={true}
//               value={''}
//               maxLength={30}
//               style={{
//                 borderRadius: 10,
//                 backgroundColor: '#ddd',
//                 height: 45,
//                 paddingHorizontal: 10,
//               }}
//             />
//           </View>
//           <View flexG-1>
//             <TextField
//               onChangeText={text => setCVC(text)}
//               keyboardType="number-pad"
//               placeholder={'CVC'}
//               floatOnFocus={true}
//               value={''}
//               maxLength={30}
//               style={{
//                 borderRadius: 10,
//                 backgroundColor: '#ddd',
//                 height: 45,
//                 paddingHorizontal: 10,
//               }}
//             />
//           </View>
//         </View>
//       </View>
//       <Button
//         onPress={() => navigation.navigate('PaymentDetails' as never)}
//         label={'Confirm'}
//         size={Button.sizes.large}
//         backgroundColor={Colors.blue40}
//         marginB-20
//         style={{
//           borderRadius: 10,
//         }}
//       />
//     </View>
//   );
// };

// export default PaymentFormScreen;

import React, {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const PaymentFormScreen = ({route, navigation}: any) => {
  const [cardInfo, setCardInfo] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  const {id, orgName, amount} = route.params;

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log({id, orgName, amount, token: user.token});
  }, [id, orgName, amount, user]);

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

        console.log({paymentMethod});

        let paymentMethodId = paymentMethod.paymentMethod?.id;

        if (paymentMethodId) {
          let paymentSuccess = await axios.post(
            `${baseUrl}/payments/create`,
            {
              amount,
              paymentMethodId,
              orgId: id,
              orgName,
            },
            {
              headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user.token}`,
              },
            },
          );
          console.log({paymentSuccess: paymentSuccess.data});
          if (paymentSuccess.data.success == true) {
            showMessage({
              message: 'Payment sent successfully',
              type: 'success',
            });

            setTimeout(() => {
              navigation.navigate('PaymentHistory');
            }, 1000);
          }
        }

        console.log({paymentMethodId});
      } catch (error: any) {
        if (error && error.response) {
          console.log(error.response.data);
        } else {
          console.log(error);
        }
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
