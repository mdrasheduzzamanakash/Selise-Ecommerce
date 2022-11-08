import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any = {
    productName: 'Asus',
    productShortCode: 'as-lap',
    category: 'Fruits',
    price: 4100,
    description: 'good in condition',
    imageUrl: 'https://m.media-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg',
    isBestAchived: 'no',
    createdDate: '2022-11-07T18:00:00.000Z',
    origin: 'India',
    id: 1,
  };
  constructor() {}

  ngOnInit(): void {}
}
