import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { ControlInterface } from './reusable-table/control-interface';
import { CrudInterface } from './reusable-table/crud-interface';
import { TableComponent } from './reusable-table/table/table.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableComponent],
})
export class AppComponent implements OnInit {
  // apiForTable: CrudInterface = {
  //   create: 'https://pacific-shore-31807.herokuapp.com/api/add-Product',
  //   read: 'https://pacific-shore-31807.herokuapp.com/api/',
  //   update: 'https://pacific-shore-31807.herokuapp.com/api/update-Product/',
  //   delete: 'https://pacific-shore-31807.herokuapp.com/api/delete-Product/',
  // };
  // controlForTable: ControlInterface = {
  //   pageSize: [10, 15, 20],
  //   sorting: false,
  //   filter: false,
  //   columns: [
  //     'productName',
  //     'productShortCode',
  //     'category',
  //     'price',
  //     'count',
  //     'createdDate',
  //     'origin',
  //     'action',
  //   ],
  //   actions: false,
  // };

  title = 'Selise-Ecommerce';
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private router: Router
  ) {}

  allProducts: any[];

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.allProducts = res;
      },
      error: (err) => {
        console.log('Error while getting all the products');
      },
    });
  }

  cartClicked() {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.allProducts = res;
        this.dialog
          .open(CartDialogComponent, {
            width: '50%',
            data: this.allProducts,
          })
          .afterClosed()
          .subscribe((val) => {
            if (val! === 'done') {
              this.router.navigate(['/mycart']);
            }
          });
      },
      error: (err) => {
        console.log('Error while getting all the products');
      },
    });
  }
}
