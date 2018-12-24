// app/components/Address.js
import React  from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import {styles} from './Styles';
import {styles as SpecificStyle} from './SpecificStyles'
// functional component/view component

// component
const Phone = (props) => (
    <View style={styles.phone}>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text> Phone {props.phone}</Text>
    </View>
);

const Email = (props) => (
    <View style={styles.email}>
         <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text> Email {props.email}</Text>
    </View>
);


// create and return virtual dom
// props are passed as first argument
export function Address(props) {
    console.log('Address render');

    // props are immutable
    // props.address = {};

    // props.children

    const address = props.address;

    return (
        <View style={SpecificStyle.address}>
            <Text>City {address.city}</Text>
            <Text>State {address.state}</Text>
            <Text>Pincode</Text>
            <Phone phone={34523542343} />
            <Email email='someone@example.com' />
            <Email email='text@gmail.com' />
            { props.children }
        </View>
    )
}

