import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetailsComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskboard';
}
