// app/cart/components/Paypal.android.js

import React  from 'react';
import {View, Text} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/Ionicons';

// functional component/view component

// component
const Paypal = (props) => (
    <View>
         

    <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text> Paypal Android {props.bankcode}</Text>
    </View>
);

export default Paypal;
