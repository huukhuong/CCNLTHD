import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import cartStore from '../stores/CartStore';
import {observer} from 'mobx-react';

const CartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={cartStore.cartItems}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
              marginHorizontal: 5,
            }}>
            <Image source={{uri: item.image}} style={{width: 80, height: 80}} />
            <View>
              <Text>{item.name}</Text>
              <Text>SL: {item.quantityInCart}</Text>
            </View>
          </View>
        )}
      />
      <Text style={{color: 'red', padding: 10, fontWeight: 'bold'}}>
        Tổng cộng: {cartStore.calculatePrice}
      </Text>
    </View>
  );
};

export default observer(CartScreen);

const styles = StyleSheet.create({});
