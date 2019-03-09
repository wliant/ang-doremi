import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { OrderListComponent } from '../../order-list/order-list.component';
import { OrderDetailComponent } from '../../order-detail/order-detail.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { AddOrderDetailComponent } from '../../order-detail/add-order-detail.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CustomerEvaluationComponent } from '../../customer-evaluation/customer-evaluation.component';
import { OrderApprovalComponent } from '../../order-approval/order-approval.component';
import { SupplierReorderComponent } from '../../supplier-reorder/supplier-reorder.component';
import { CustomerListComponent } from '../../customer-component/customer-list.component';
import { CustomerDetailComponent } from '../../customer-component/customer-detail.component';
import { AddCustomerDetailComponent } from '../../customer-component/add-customer-detail.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE
} from '@angular/material';
import { AddProductDetailComponent } from 'src/app/product-detail/add-product-detail.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    AddOrderDetailComponent,
    NotificationsComponent,
    TaskListComponent,
    ProductListComponent,
    AddProductDetailComponent,
    ProductDetailComponent,
    CustomerEvaluationComponent,
    OrderApprovalComponent,
    SupplierReorderComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddCustomerDetailComponent
  ]
})

export class AdminLayoutModule {}
