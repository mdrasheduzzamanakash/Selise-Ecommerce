import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'mycart', component: MycartComponent },
  { path: 'createNew', component: CreateProductComponent },
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
