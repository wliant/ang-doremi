import { Component, OnInit, Input } from '@angular/core';
import { CustomerEvaluation } from '../kie-model/customer-evaluation';
import { KieService, TASK_ACTIONS } from '../services/kie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestockRequest } from '../model/restockRequest';
import { Product } from '../model/product'
import { TaskSummary } from '../kie-model/task-summary';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-supplier-reorder',
    templateUrl: './supplier-reorder.component.html',
    styleUrls: ['./supplier-reorder.component.css']
  })
  export class SupplierReorderComponent implements OnInit {
      @Input() restockRe : RestockRequest;
      taskId: number;
      @Input() product: Product;

      constructor(
          private route: ActivatedRoute,
          private KieService: KieService,
          private location: Location
      ) {

      }
      ngOnInit(): void {
        this.getInput();
      }

      getInput(): void {

          this.taskId = +this.route.snapshot.paramMap.get('id');

          this.KieService.getTaskInput(this.taskId).subscribe(
            (response: any) => {
              console.log(JSON.stringify(response));
              let c = new RestockRequest(response.input["com.thesundaylunatics.model.RestockRequest"]);
              this.restockRe = c;
              console.log("show restockRe "+JSON.stringify(this.restockRe));
              let product = new Product(c.product["com.thesundaylunatics.model.Product"]);
              this.product = product;
              console.log("show product "+JSON.stringify(this.product));

            }
          )
      }

      save(): void {
          this.KieService.actOnTask(this.taskId, TASK_ACTIONS.COMPLETED, {"output": {"RestockRequest": this.restockRe}})
            .subscribe(()=>this.goBack());
      }

      goBack(): void {
          this.location.back();
      }
  }
