import {Product} from '../models/Product';

export type RootStackParams = {
  HomeScreen: undefined;
  ProductDetailScreen: {product: Product};
  CartScreen: undefined;
};
