import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Product} from '../models/Product';

type props = {
  product: Product;
  onPress: () => void;
};
const ProductItem = ({product, onPress}: props) => {
  const width = Dimensions.get('screen').width;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {width: width / 2 - 12}]}>
      <Image source={{uri: product.image}} style={styles.img} />
      <Text style={styles.txtName} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={styles.txtPrice}>
        {product.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  img: {
    width: '100%',
    height: 200,
  },
  txtName: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  txtPrice: {
    color: '#FF0000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
