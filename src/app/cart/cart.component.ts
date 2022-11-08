import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cartData: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  addToCart() {
    if (this.cartData.count > 0) {
      this.cartData.count--;
      this.cartData.inCart++;
      // make the api call
      this.api.putProduct(this.cartData, this.cartData.id).subscribe({
        next: (res) => {
          console.log('Added to cart successfully');
        },
        error: (err) => {
          alert('Error while adding to the cart');
        },
      });
    } else {
      alert('Not avaiable');
    }
  }
  incCart() {
    this.addToCart();
  }
  decCart() {
    if (this.cartData.inCart > 0) {
      this.cartData.inCart--;
      this.cartData.count++;
      this.api.putProduct(this.cartData, this.cartData.id).subscribe({
        next: (res) => {},
        error: (err) => {},
      });
    }
  }
}
