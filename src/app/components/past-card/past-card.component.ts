import { Component, Input } from '@angular/core';
import { PastMayor } from 'src/app/models/past-mayor';

@Component({
  selector: 'app-past-card',
  templateUrl: './past-card.component.html',
  styleUrls: ['./past-card.component.scss']
})
export class PastCardComponent {
  @Input() dataFromForm?: PastMayor[];
  @Input() formSubmitted?: Boolean;

}
