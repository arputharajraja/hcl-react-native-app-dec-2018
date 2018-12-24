// app/cart/components/Paypal.ios.js
import React  from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


//import { Ionicons } from '@expo/vector-icons';

// functional component/view component

// component
const Paypal = (props) => (
    <View>
        {/* <Ionicons name="md-call" 
                         size={24} 
                         color="red"
                         /> */}

        <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text> Paypal iOS {props.bankcode}</Text>
    </View>
);

export default Paypal;
