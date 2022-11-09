import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlInterface } from '../reusable-table/control-interface';
import { CrudInterface } from '../reusable-table/crud-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  apiForTable: CrudInterface = {
    create: 'https://pacific-shore-31807.herokuapp.com/api/add-Product',
    read: 'https://pacific-shore-31807.herokuapp.com/api/',
    update: 'https://pacific-shore-31807.herokuapp.com/api/update-Product/',
    delete: 'https://pacific-shore-31807.herokuapp.com/api/delete-Product/',
  };
  controlForTable: ControlInterface = {
    pageSize: [10, 15, 20],
    sorting: false,
    filter: false,
    columns: [
      'productName',
      'productShortCode',
      'category',
      'price',
      'count',
      'createdDate',
      'origin',
      'action',
    ],
    actions: true,
  };

  apiForTable2: CrudInterface = {
    create: 'https://pacific-shore-31807.herokuapp.com/api/add-Product',
    read: 'https://pacific-shore-31807.herokuapp.com/api/',
    update: 'https://pacific-shore-31807.herokuapp.com/api/update-Product/',
    delete: 'https://pacific-shore-31807.herokuapp.com/api/delete-Product/',
  };
  controlForTable2: ControlInterface = {
    pageSize: [10, 15, 20],
    sorting: false,
    filter: false,
    columns: ['productName', 'productShortCode', 'category', 'price', 'count'],
    actions: false,
  };

  apiForTable3: CrudInterface = {
    create: 'https://pacific-shore-31807.herokuapp.com/api/add-Product',
    read: 'https://pacific-shore-31807.herokuapp.com/api/',
    update: 'https://pacific-shore-31807.herokuapp.com/api/update-Product/',
    delete: 'https://pacific-shore-31807.herokuapp.com/api/delete-Product/',
  };
  controlForTable3: ControlInterface = {
    pageSize: [5, 15, 20],
    sorting: false,
    filter: true,
    columns: ['productName', 'productShortCode', 'category'],
    actions: true,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  createNewProduct() {
    this.router.navigate(['/createNew']);
  }
}
