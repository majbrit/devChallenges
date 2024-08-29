import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

}
