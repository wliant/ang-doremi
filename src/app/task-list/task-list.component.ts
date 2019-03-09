import { Component, OnInit } from '@angular/core';
import { TaskSummary } from '../kie-model/task-summary';
import { KieService, TASK_ACTIONS } from '../services/kie.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TaskSummary[];
  constructor(private kieService: KieService,private router: Router) { }

  getTasks(): void {
    this.kieService.getTasks().subscribe(tsl => this.tasks = tsl.taskSummary);
  }

  ngOnInit() {
    this.getTasks();
  }

  startTask(taskId: number) {
    console.log("startTaskTrigger");
    this.kieService.actOnTask(taskId,TASK_ACTIONS.CLAIMED).subscribe(
        _ => {
            this.kieService.actOnTask(taskId, TASK_ACTIONS.STARTED).subscribe(
                _ => {
                  this.workOnTask(taskId);
                }
            )
        }
    );
  }

  workOnTask(taskId: number) {
    let theTask: TaskSummary;

    for(let t of this.tasks) {
      if(t.id == taskId) {
        theTask = t;
      }
    }

    if(theTask.name == "Customer Evaluation Task") {
      this.router.navigate([`/customer-evaluation/${taskId}`]);
    }else if(theTask.name == "Supplier Reorder Approval"){
      this.router.navigate([`/supplier-reorder/${taskId}`]);
    }

    if(theTask.name == "Final Approval") {
      this.router.navigate([`/order-approval/${taskId}`]);
    }
  }

}
