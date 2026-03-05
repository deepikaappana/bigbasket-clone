import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from '../home/home';
import { Login } from '../login/login';
import { Products } from '../products/products';
import { Cart } from '../cart/cart';
@Component({
  selector: 'app-layout',
  imports: [RouterModule, Home, Login, Products, Cart],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
