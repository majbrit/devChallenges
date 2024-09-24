import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskboardService } from '../../services/taskboard.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  constructor(private taskboardService: TaskboardService) {}

  saveTask() {
    this.taskboardService.saveTask();
  }

  deleteTask() {
    this.taskboardService.deleteTask();
  }
  
}
