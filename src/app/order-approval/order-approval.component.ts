import { Component, OnInit, Input } from '@angular/core';
import { CustomerEvaluation } from '../kie-model/customer-evaluation';
import { KieService, TASK_ACTIONS } from '../services/kie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Customer } from '../model/customer';
import { TaskSummary } from '../kie-model/task-summary';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-order-approval',
    templateUrl: './order-approval.component.html',
    styleUrls: ['./order-approval.component.css']
  })
  export class OrderApprovalComponent implements OnInit {
      customer : Customer;
      ce: CustomerEvaluation = new CustomerEvaluation();
      @Input() taskSummary: TaskSummary;
      

      constructor(
          private route: ActivatedRoute,
          private KieService: KieService,
          private location: Location
      ) {

      }
      ngOnInit(): void {
        this.getCustomer();
      }

      getCustomer(): void {
          this.KieService.getTaskInput(this.taskSummary.id).pipe(
            map((response: any) => this.customer = response.input["com.thesundaylunatics.model.Customer"])
          );
      }

      save(): void {
          this.KieService.actOnTask(this.taskSummary.id, TASK_ACTIONS.COMPLETED, {"output": {"CustomerEvaluation": this.ce}})
            .subscribe(()=>this.goBack());
          //this.productService.addProduct(this.product).subscribe(() => this.goBack());
      }

      goBack(): void {
          this.location.back();
      }
  }