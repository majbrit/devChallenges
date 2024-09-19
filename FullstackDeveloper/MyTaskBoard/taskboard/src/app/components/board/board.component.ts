import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { Task } from '../../models/task.model';
import { TaskboardService } from '../../services/taskboard.service';
import { CommonModule } from '@angular/common';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DetailsComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @ViewChild('myPage') myPage: ElementRef  | undefined;

  tasks?: Task[];
  isVisible = false;

  constructor(private taskboardService: TaskboardService) {}

  ngOnInit(): void {
    this.retrieveTasks();
  }

  retrieveTasks(): void {
    this.taskboardService.getAll().subscribe({
      next: (data) => {
        this.tasks = data;
        console.log("data is here:");
        console.log(data);
      },
      error: (e) => console.error(e)
    });
    console.log(this.tasks);
  }

  showDetails(): void {
    this.isVisible = true;
    const element = this.myPage?.nativeElement ?? null;
    if (element) {
      element.style.overflow = 'hidden';
    }
  }

}
