import { Component, OnInit, Input } from '@angular/core';
import { KieService, TASK_ACTIONS } from '../services/kie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../model/order';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-order-approval',
    templateUrl: './order-approval.component.html',
    styleUrls: ['./order-approval.component.css']
  })
  export class OrderApprovalComponent implements OnInit {
      order: Order;
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
            let c = new Order(response.input["com.thesundaylunatics.model.Order"]);
            this.order = c;
          }
        )
      }

      approve(): void {
          this.order.status = "Approved";
          this.KieService.actOnTask(
            this.taskId, 
            TASK_ACTIONS.COMPLETED, 
            {
              "output": {"Order": this.order
            }
          }).subscribe(()=>this.goBack());
      }

      reject(): void {
        this.order.status = "Rejected";
        this.KieService.actOnTask(
          this.taskId, 
          TASK_ACTIONS.COMPLETED, 
          {
            "output": {"Order": this.order
          }
        }).subscribe(()=>this.goBack());
    }

      goBack(): void {
          this.location.back();
      }
  }