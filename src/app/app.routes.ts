import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Products } from './products/products';
import { Layout } from './layout/layout';
import { Cart } from './cart/cart';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', component: Home },
      { path: 'products/:category', component: Products },
      { path: 'login', component: Login },
      { path: 'cart', component: Cart },

    ]
  },


];