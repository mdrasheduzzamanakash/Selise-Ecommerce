import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  cartList: any = [
    {
      productName: 'Asus',
      productShortCode: 'as-lap',
      category: 'Fruits',
      price: 4100,
      description: 'good in condition',
      imageUrl:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg',
      isBestAchived: 'no',
      createdDate: '2022-11-07T18:00:00.000Z',
      origin: 'India',
      id: 1,
    },
    {
      productName: 'Realme phone ',
      productShortCode: 'ph',
      category: 'Fruits',
      price: 232,
      description: 'very good ',
      imageUrl:
        'https://m.media-amazon.com/images/I/51UHoxzInpL._AC_SY200_.jpg',
      isBestAchived: 'yes',
      createdDate: '2022-11-07T18:00:00.000Z',
      origin: 'India',
      id: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
