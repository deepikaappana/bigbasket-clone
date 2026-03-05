import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() {}


  addToCart(product: any) {
    const existingItem = this.cartItems.find(
      item => item.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    console.log("Cart Items:", this.cartItems);
  }
  getCartItems() {
    return this.cartItems;
  }
  setCartItems(items: any[]) {
    this.cartItems = items;
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(
      item => item.id !== productId
    );
  }
  clearCart() {
    this.cartItems = [];
  }
  getCartCount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

}