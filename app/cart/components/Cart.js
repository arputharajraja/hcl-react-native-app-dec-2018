import React from "react";

import {View, Text, Button, StyleSheet} from "react-native";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class Cart extends React.Component {


    static navigationOptions = {
        title: 'Cart'
    }


    constructor(props) {
        super(props);
        console.log("cart cons ", props);

        this.state = {
           
            amount: 0,
            flag: true
        }
    }

    componentDidMount() {
     
    
    }

    addItem() {

        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }
 
        console.log(item.id, " added");
 

        this.props.addItemToCart(item);

    }

    removeItem(id) {
        this.props.actions.removeItemFromCart(id);
    }

    updateItem(id, qty) {
        
        this.props.actions.updateItemInCart(id, qty);

    }

    refresh() {
        this.setState({
            flag: !this.state.flag
        });
    }

    //keyword for react
    //returns a view
    //returns a virtual dom
    render() {

        console.log("cart render");
 

        let cartItems = this.props.cartItems || [];
         
        return (
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>

                    <Button title="Add"
                             onPress={() => this.addItem()}
                    >
                    
                    </Button>

                    <Button title="Refresh"
                             onPress={() => this.refresh()}
                    >
                    
                    </Button>

                    <CartList items={cartItems}
                    
                              onUpdate={(id, qty) => this.updateItem(id, qty)}
                              onRemove={(id) => this.removeItem(id)}
                    
                     />

                    <CartSummary amount={this.props.amount}
                                 total = {this.props.cartItems.length}
                     />

                </View>
        )
    }

}

Cart.defaultProps = {
    title  : "Cart",
    cartItems: []
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
  });