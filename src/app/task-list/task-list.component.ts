import { Component, OnInit } from '@angular/core';
import { TaskSummary } from '../kie-model/task-summary';
import { KieService } from '../services/kie.service';

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

}
