import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { OrderListComponent } from '../../order-list/order-list.component';
import { OrderDetailComponent } from '../../order-detail/order-detail.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { AddOrderDetailComponent } from '../../order-detail/add-order-detail.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ModalComponent } from '../../modal.component';

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
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    OrderListComponent,
    OrderDetailComponent,
    AddOrderDetailComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TaskListComponent,
    ModalComponent,
    ProductListComponent,
    AddProductDetailComponent
  ]
})

export class AdminLayoutModule {}
