import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingsListComponent } from "./ratings-list/ratings-list.component";
import { RatingComponent } from './rating/rating.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { Rating } from './rating';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RatingsListComponent, RatingComponent, AverageRatingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ratings-app');
  public ratings: Rating[] = [
    { name: 'Keisha Holmes', content: 'Keisha content...', rate: 4 },
    { name: 'John Doe', content: 'John content...', rate: 5 },
    { name: 'Jane Smith', content: 'Jane content...', rate: 1 },
  ]
}
