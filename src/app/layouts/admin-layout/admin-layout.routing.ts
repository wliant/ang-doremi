import { Routes } from '@angular/router';

import { OrderListComponent } from '../../order-list/order-list.component';
import { OrderDetailComponent } from '../../order-detail/order-detail.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { AddOrderDetailComponent } from '../../order-detail/add-order-detail.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { AddProductDetailComponent } from 'src/app/product-detail/add-product-detail.component';
import { CustomerEvaluationComponent } from '../../customer-evaluation/customer-evaluation.component';
import { OrderApprovalComponent } from '../../order-approval/order-approval.component';
import { SupplierReorderComponent } from '../../supplier-reorder/supplier-reorder.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'order-list',     component: OrderListComponent },
    { path: 'order-detail/:id',   component: OrderDetailComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'add-order-detail', component: AddOrderDetailComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-detail/:id',   component: ProductDetailComponent },
    { path: 'add-product-detail', component: AddProductDetailComponent },
    { path: 'customer-evaluation/:id', component: CustomerEvaluationComponent },
    { path: 'order-approval/:id', component: OrderApprovalComponent },
    { path: 'supplier-reorder/:id', component: SupplierReorderComponent }

];
