import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  host: { class: 'ratings__item' },
  styles: [`
    :host { display: block;} 
  `]
})
export class RatingComponent {
  @Input('name')
  public name: string = '';

  @Input('content')
  public content: string ='';

  @Input('rate')
  public rate: number = 0;
}
