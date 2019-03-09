import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';
import { KieService } from '../services/kie.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  instanceId: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private kieService: KieService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(ord => this.product = ord);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.product);
      this.productService.updateProduct(this.product);
       this.kieService.submitProcess("DoReMi-kjar.InventoryRestockProcess",{"product": {"Product": this.product}})
      .subscribe(()=> this.goBack());
  }
}
