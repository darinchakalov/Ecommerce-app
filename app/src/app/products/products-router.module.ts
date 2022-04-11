import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard, AdminGuard],
    data: {
      authenticationRequired: true,
      hasToBeAdmin: true,
      authenticationFailureRedirectUrl: '/',
    },
  },
  {
    path: 'edit/:productId',
    component: EditComponent,
    canActivate: [AuthGuard],
    data: {
      authenticationRequired: true,
      hasToBeAdmin: true,
      authenticationFailureRedirectUrl: '/',
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/user/login',
    },
  },
  {
    path: ':productId',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
