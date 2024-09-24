import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const baseUrl = 'http://localhost:8000/api/taskboard';


@Injectable({
  providedIn: 'root'
})
export class TaskboardService {

  
  constructor(private http: HttpClient) { }

  tasks = [
    { 
      id: 1,
      name: "Task in Progress",
      description: " ",
      icon: "alarm",
      status: "progress"
    },
    { 
      id: 2,
      name: "Task Completed",
      description: " ",
      icon: "strong",
      status: "done" 
    },
    { 
      id: 3,
      name: "Tasks Won't Do",
      description: " ",
      icon: "coffee",
      status: "not" 
    },
    { 
      id: 4,
      name: "Tasks To Do",
      description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
      icon: "books",
      status: "none" 
    }
  ];

  createBoard(): Observable<{ boardId: string }>{
    return this.http.get<{ boardId: string }>(`${baseUrl}/board`);
  }

  getAll(boardId:string): Observable<Task[]> {
    return this.http.get<Task[]>(`${baseUrl}/board/${boardId}`);
  }

  deleteTask() {
    
  }

  saveTask() {
    console.log("hi");
  }
}
