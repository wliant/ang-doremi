import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { OrderListComponent } from '../../order-list/order-list.component';
import { ApprovedOrderListComponent } from '../../approved-order-list/approved-order-list.component';
import { OrderDetailComponent } from '../../order-detail/order-detail.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { ProductListComponent } from '../../product-list/product-list.component';
import { AddOrderDetailComponent } from '../../order-detail/add-order-detail.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { AddProductDetailComponent } from 'src/app/product-detail/add-product-detail.component';
import { CustomerEvaluationComponent } from '../../customer-evaluation/customer-evaluation.component';
import { OrderApprovalComponent } from '../../order-approval/order-approval.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'order-list',     component: OrderListComponent },
    { path: 'approved-order-list',     component: ApprovedOrderListComponent },
    { path: 'order-detail/:id',   component: OrderDetailComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'add-order-detail', component: AddOrderDetailComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product-detail/:id',   component: ProductDetailComponent },
    { path: 'add-product-detail', component: AddProductDetailComponent },
    { path: 'customer-evaluation/:id', component: CustomerEvaluationComponent },
    { path: 'order-approval/:id', component: OrderApprovalComponent }
];
