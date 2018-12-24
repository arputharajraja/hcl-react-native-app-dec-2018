// App.js
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import {createStackNavigator, 
        createAppContainer,
        createTabNavigator,
        createBottomTabNavigator,
        createMaterialTopTabNavigator
      
      } from 'react-navigation';
import HomeScreen from './app/components/HomeScreen';
import AboutScreen from './app/components/AboutScreen';
import ContactScreen from './app/components/ContactScreen';

import CameraScreen from './app/components/CameraScreen';

import FileSys from './app/components/FileSys';

import {Counter} from './app/components/Counter';

import ReactReduxCounter 
        from './app/components/ReactReduxCounter';

// default imports alias by default
import FuncCounter from './app/containers/FuncCounter';
import ProductList from './app/product/containers/ProductList';


import ReactCart from './app/react-cart/components/Cart';
import Checkout from './app/react-cart/components/Checkout';


//Redux Cart

import Cart from './app/cart/containers/Cart';

import {Provider} from 'react-redux';
import store from './app/store';

// component
const CompanyStackNavigator = createStackNavigator({
  // Name of the screen : Component name
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Contact: {
    screen: ContactScreen
  },
  Counter: {
    screen: Counter
  },
  ReactReduxCounter: {
    screen: ReactReduxCounter
  },
  FuncCounter: {
    screen: FuncCounter
  },
  ProductList: {
    screen: ProductList
  },
  ReactCart: {
    screen: ReactCart
  },
  FileSys: {
    screen: FileSys
  },
  CameraScreen: {
    screen: CameraScreen
  }
});


const tabScreens = {
  Home: {
    screen: CompanyStackNavigator
  },
  Cart: {
    screen: Cart
  },
  Checkout: {
    screen: Checkout
  }
};

const TabNavigator = Platform.select({
  ios: createBottomTabNavigator(tabScreens),
  android: createMaterialTopTabNavigator(tabScreens)
});

//export default createAppContainer(TabNavigator);
const NavContainer = createAppContainer(TabNavigator);

const App = () => (
  <Provider store={store}>
    <NavContainer />
  </Provider>
)

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
