import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  filteredProducts$!: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}


  ngOnInit() {
    this.filteredProducts$ = this.route.paramMap.pipe(
      switchMap(params => {
        const category = params.get('category');
        return this.http.get<any[]>('products.json').pipe(
          map(data => data.filter(product => product.category === category))
        );
      })
    );
  }
  //    addToCart(product: any) { 
  //   console.log("Adding to cart:", product);
  //   this.cartService.addToCart(product);
  //   // alert(`${product.name} added to cart!`);
  // }

    addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  
  getQty(product: any) {
    return this.cartService.getQuantity(product.id);
  }

 
  increase(product: any) {
    this.cartService.increaseQty(product);
  }

 
  decrease(product: any) {
    this.cartService.decreaseQty(product);
  }
 
}