import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  subtotal = 0;
  discount = 0;
  tax = 0;
  shipping = 50;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateSummary();
  }

 
  // increaseQty(item: any) {
  //   item.quantity++;
  //   this.calculateSummary();
  // }

    increaseQty(item: any) {
    this.cartService.increaseQty(item);
  }


  // decreaseQty(item: any) {
  //   if (item.quantity > 1) {
  //     item.quantity--;
  //   } else {
  //     this.removeItem(item);
  //   }
  //   this.calculateSummary();
  // }

    decreaseQty(item: any) {
    this.cartService.decreaseQty(item);   
    this.cartItems = this.cartService.getCartItems();
    this.calculateSummary();
  }



  // removeItem(item: any) {
  //   this.cartItems = this.cartItems.filter(
  //     (i) => i.id !== item.id
  //   );
  //   this.cartService.setCartItems(this.cartItems);
  //   this.calculateSummary();
  // }

    removeItem(item: any) {
    this.cartService.removeItem(item.id); 
    this.cartItems = this.cartService.getCartItems();
    this.calculateSummary();
  }


  calculateSummary() {

    this.subtotal = this.cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    this.discount = this.subtotal > 500 ? this.subtotal * 0.1 : 0;

    this.tax = (this.subtotal - this.discount) * 0.05;

    this.total =
      this.subtotal -
      this.discount +
      this.tax +
      this.shipping;
  }
}