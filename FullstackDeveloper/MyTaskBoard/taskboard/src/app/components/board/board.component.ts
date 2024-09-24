import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { Task } from '../../models/task.model';
import { TaskboardService } from '../../services/taskboard.service';
import { CommonModule } from '@angular/common';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DetailsComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {
  boardId: string | null = null;
  @ViewChild('myPage') myPage: ElementRef  | undefined;

  tasks?: Task[];
  isVisible = false;

  constructor(private taskboardService: TaskboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.boardId = params.get('boardId');
      console.log("this.boardId");
      console.log(this.boardId);
      if (this.boardId === 'new') { 
        this.taskboardService.createBoard().subscribe(({ boardId }) => {
          console.log("else");
          console.log(boardId);
          this.router.navigate([`/board/${boardId}`]);
          //this.retrieveTasks();
          
        });
      } else {
        this.retrieveTasks();
        console.log("if");
      }  
    });    
  }

  retrieveTasks(): void {
    console.log("retrieve");
    if (this.boardId) {
      this.taskboardService.getAll(this.boardId).subscribe({
        next: (data) => {
          this.tasks = data;
          console.log("data is here:");
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      console.log(this.tasks);
    }
  }

  showDetails(): void {
    this.isVisible = true;
    const element = this.myPage?.nativeElement ?? null;
    if (element) {
      element.style.overflow = 'hidden';
    }
  }

}
