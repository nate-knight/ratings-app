import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '../rating';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-average-rating',
  imports: [RatingComponent],
  templateUrl: './average-rating.component.html',
  host: { class: 'ratings-average' }
})
export class AverageRatingComponent implements OnInit {
  @Input('ratings')
  public ratings: Rating[] = [];

  public averageRoundedUp: number = 0;

  ngOnInit() {
    const total = this.ratings.reduce((acc, rating) => acc + rating.rate, 0);
    this.averageRoundedUp = this.ratings.length ? Math.ceil(total / this.ratings.length) : 0;
  }
}
