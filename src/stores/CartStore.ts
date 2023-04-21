import {action, computed, observable} from 'mobx';
import {Product} from '../models/Product';

class CartStore {
  @observable cartItems: Product[] = [];

  @action
  addToCart = (product: Product, quantity: number) => {
    const indexFind = this.cartItems.findIndex(x => x.name === product.name);
    const temp = [...this.cartItems];
    if (indexFind > -1) {
      temp[indexFind].quantityInCart =
        (temp[indexFind].quantityInCart || 0) + quantity;
    } else {
      temp.push({...product, quantityInCart: quantity});
    }
    this.cartItems = temp;
  };

  @computed get calculatePrice() {
    const total = Object.values(this.cartItems).reduce(
      (t, {price, quantityInCart}: Product) =>
        t + price * (quantityInCart || 1),
      0,
    );
    return total;
  }
}

const cartStore = new CartStore();
export default cartStore;
