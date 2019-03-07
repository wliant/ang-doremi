import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products : Product[];
    constructor(private productService: ProductService) {

    }

    addProduct(): void {

    }

    getProducts(): void {
        this.productService.getProducts()
            .subscribe(prods => this.products = prods);
    }

    ngOnInit() {
        this.getProducts();
    }
}