import { Component, Input } from '@angular/core';
import { Rating } from '../rating';
import { RatingComponent } from '../rating/rating.component';
import { AverageRatingComponent } from '../average-rating/average-rating.component';

@Component({
  selector: 'app-ratings-list',
  imports: [RatingComponent, AverageRatingComponent],
  templateUrl: './ratings-list.component.html',
  host: { class: 'ratings' },
})
export class RatingsListComponent {
  @Input('ratings')
  public ratings: Rating[] = [];
}
