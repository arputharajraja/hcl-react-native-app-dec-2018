// app/components/HomeScreen.js

import React from 'react';
import {View, Button, Text, NativeModules, Alert, ScrollView} from 'react-native';

import ButtonView from './ButtonView';

// 
// From Java 
// public String getName() {
//     return "ToastExample";
// }

const ToastExample = NativeModules.ToastExample;

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
      };

    constructor(props) {
        super(props)
    }

    gotoPage = (pageName) => {

        // navigation injected by parent stack nav
        this.props.navigation.navigate(pageName);
    };

    callJavaModule = () => {
        console.log("CAlling java");
        ToastExample.show("Hello Java from JS", 5000);
    }


    callJavaModule2 = () => {
        console.log("CAlling java 2 str");
        ToastExample.addTwoString("REact", "Native")
                     .then ((result) => {
                        Alert.alert("Java Int", result);
                     })
    }

    gotoContact = () => {
        const address = {
            state: 'KA',
            city: 'BLR',
            pincode: 560001
        };

        // navigation injected by parent stack nav
        this.props.navigation.navigate("Contact", { address });
    };

    render() {
        return (
            <ScrollView>
            <View>
                <ButtonView  height={50} width={200} />
                <ButtonView textTitle="From VDOM"  height={50} width={200}  />
                <Text style={ {fontSize: 24} }> Home Page</Text>

                <Button onPress={ () => this.callJavaModule()}
                        title="Call Java" />

            <Button onPress={ () => this.callJavaModule2()}
                                    title="Call Java two str" />

                <Button onPress={ () => this.gotoPage('About')}
                        title="About" />
                                
                <Button onPress={ () => this.gotoContact()}
                                        title="Contact" />
                                
                <Button onPress={ () => this.gotoPage('Checkout')}
                                                        title="Checkout" />
            
            <Button onPress={ () => this.gotoPage('Counter')}
                                                        title="Counter" />
            

            <Button onPress={ () => this.gotoPage('ReactReduxCounter')}
                                                        title="ReactReduxCounter" />
            
            

            <Button onPress={ () => this.gotoPage('FuncCounter')}
                                                        title="FuncCounter" />
            
            

            <Button onPress={ () => this.gotoPage('ProductList')}
                                                        title="ProductList" />


            <Button onPress={ () => this.gotoPage('ReactCart')}
                                                                    title="ReactCart" />
                        
            
            

            <Button onPress={ () => this.gotoPage('FileSys')}
                                                                    title="FileSys" />
                        
            
            
            <Button onPress={ () => this.gotoPage('CameraScreen')}
                                                        title="CameraScreen" />
            
            <Button onPress={ () => this.gotoPage('GeoLocation')}
                                                        title="GeoLocation" />
            
            
            </View>
            </ScrollView>
        )
    }
}