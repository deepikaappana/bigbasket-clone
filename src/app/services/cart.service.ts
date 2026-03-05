// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   private cartItems: any[] = [];

//   constructor() {}


//   addToCart(product: any) {
//     const existingItem = this.cartItems.find(
//       item => item.id === product.id
//     );

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       this.cartItems.push({ ...product, quantity: 1 });
//     }

//     console.log("Cart Items:", this.cartItems);
//   }
//   getCartItems() {
//     return this.cartItems;
//   }
//   setCartItems(items: any[]) {
//     this.cartItems = items;
//   }

//   removeItem(productId: number) {
//     this.cartItems = this.cartItems.filter(
//       item => item.id !== productId
//     );
//   }
//   clearCart() {
//     this.cartItems = [];
//   }
//   getCartCount(): number {
//     return this.cartItems.reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   }

// }



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  constructor() {}


  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);

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

  increaseQty(product: any) {
    const item = this.cartItems.find(i => i.id === product.id);
    if (item) {
      item.quantity++;
    }
  }


  decreaseQty(product: any) {
    const item = this.cartItems.find(i => i.id === product.id);
    if (!item) return;

    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(product.id);
    }
  }


  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }


  getQuantity(productId: number) {
    const item = this.cartItems.find(i => i.id === productId);
    return item ? item.quantity : 0;
  }

 
  clearCart() {
    this.cartItems = [];
  }


  getCartCount(): number {
    return this.cartItems.length > 0 ? this.cartItems.length : 0;
  }

}