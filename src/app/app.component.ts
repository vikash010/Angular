import { Component } from '@angular/core';
import arrayWords, { country } from '../utils/words';
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-gen';
  words = '';
  countries = '';
  limit = 10;

  handelSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  generateRandomCountry() {
    let rndNumber: number = this.getRandomNumber(5);

    this.countries = country.slice(0, rndNumber).join(' ');
  }

  getRandomNumber(max: number) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
}
