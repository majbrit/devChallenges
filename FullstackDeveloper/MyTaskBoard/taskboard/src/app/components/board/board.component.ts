import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { Task } from '../../models/task.model';
import { TaskboardService } from '../../services/taskboard.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  tasks?: Task[];

  constructor(private taskboardService: TaskboardService) {}

  ngOnInit(): void {
    this.retrieveTasks();
  }

  retrieveTasks(): void {
    this.tasks = this.taskboardService.getAll();
    console.log(this.tasks);
  }

  

}
