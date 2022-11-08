import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
