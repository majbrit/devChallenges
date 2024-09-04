import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskboardService {

  constructor() { }

  tasks = [
    { id: 1,
      name: "task1",
      description: "some task",
      icon: "alarm",
      status: "done"
    },
    { id: 1,
      name: "task2",
      description: "some task 2",
      icon: "alarm",
      status: "done" 
    }
  ];


  getAll(): Task[] {
    return this.tasks;
  }
}
