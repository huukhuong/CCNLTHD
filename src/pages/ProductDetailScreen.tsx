import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations/RootStackParams';
import cartStore from '../stores/CartStore';
import { observer } from 'mobx-react';

type props = NativeStackScreenProps<RootStackParams, 'ProductDetailScreen'>;

const ProductDetailScreen = ({navigation, route}: props) => {
  const width = Dimensions.get('screen').width;
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={{width: width, height: 400}}
      />

      <Text style={styles.txtName}>{product.name}</Text>
      <Text style={styles.txtDesc}>{product.description}</Text>
      <Text style={styles.txtPrice}>
        Giá bán:{' '}
        {product.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
      </Text>
      <Text style={styles.txtStock}>Tồn kho: {product.quantityInStock}</Text>

      <Button
        title="Thêm vào giỏ hàng"
        onPress={() => cartStore.addToCart(product, 1)}
      />
    </View>
  );
};

export default observer(ProductDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 5,
  },
  txtDesc: {
    color: '#333',
    padding: 5,
  },
  txtPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
    padding: 5,
  },
  txtStock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 5,
    marginBottom: 10,
  },
});
