import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/customer-list', title: 'Customer List', icon: 'list', class: '' },
    { path: '/product-list', title: 'Product List', icon: 'description', class: ''},
    { path: '/order-list', title: 'Order List',  icon:'list', class: '' },
    { path: '/task-list', title: 'Task List', icon:'content_paste', class: ''},
    { path: '/login', title: 'Logout', icon: 'exit_to_app', class:''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
