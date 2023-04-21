import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import React from 'react';
import ProductItem from '../components/ProductItem';
import {products} from './mockData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations/RootStackParams';
import {Product} from '../models/Product';
import { observer } from 'mobx-react';

type props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;

const HomeScreen = ({navigation}: props) => {
  const handleViewDetail = (item: Product) => {
    navigation.navigate('ProductDetailScreen', {product: item});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Danh sách sản phẩm</Text>

      <Button
        title="Xem giỏ hàng"
        onPress={() => navigation.navigate('CartScreen')}
      />

      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item}) => (
          <ProductItem product={item} onPress={() => handleViewDetail(item)} />
        )}
      />
    </View>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: '#333',
  },
});
