import { Component, OnInit } from '@angular/core';
import { TaskSummary } from '../kie-model/task-summary';
import { KieService, TASK_ACTIONS } from '../services/kie.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : TaskSummary[];
  constructor(private kieService: KieService) { }

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
                    this.getTasks();
                }
            )
        }
    );
  }

}
