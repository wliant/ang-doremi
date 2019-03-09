import { Component, OnInit, Input } from '@angular/core';
import { CustomerEvaluation } from '../kie-model/customer-evaluation';
import { KieService, TASK_ACTIONS } from '../services/kie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Customer } from '../model/customer';
import { TaskSummary } from '../kie-model/task-summary';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-customer-evaluation',
    templateUrl: './customer-evaluation.component.html',
    styleUrls: ['./customer-evaluation.component.css']
  })
  export class CustomerEvaluationComponent implements OnInit {
      customer : Customer;
      ce: CustomerEvaluation = new CustomerEvaluation();
      taskId: number;

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
              let c = new Customer(response.input["com.thesundaylunatics.model.Customer"]);
              this.customer = c;
              this.ce.customerID = this.customer.id;
            }
          )
      }

      save(): void {
          this.KieService.actOnTask(this.taskId, TASK_ACTIONS.COMPLETED, {"output": {"CustomerEvaluation": this.ce}})
            .subscribe(()=>this.goBack());
      }

      goBack(): void {
          this.location.back();
      }
  }