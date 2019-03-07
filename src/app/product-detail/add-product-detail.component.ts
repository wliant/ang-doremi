import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add-product-detail',
    templateUrl: './add-product-detail.component.html',
    styleUrls: ['./add-product-detail.component.css']
  })
  export class AddProductDetailComponent implements OnInit {
      @Input() product : Product = new Product({});

      constructor(
          private route: ActivatedRoute,
          private productService: ProductService,
          private location: Location
      ) {}
      ngOnInit(): void {

      }

      save(): void {
          this.productService.addProduct(this.product).subscribe(() => this.goBack());
      }

      goBack(): void {
          this.location.back();
      }
  }