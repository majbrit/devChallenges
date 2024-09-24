import { Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';


export const routes: Routes = [
    { path: 'board/:boardId', component: BoardComponent }, 
    { path: '', redirectTo: '/board/new', pathMatch: 'full' }, // Umleitung zu /board
  { path: '**', redirectTo: '/board/new' } 

];
