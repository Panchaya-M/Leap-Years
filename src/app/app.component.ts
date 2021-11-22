import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leap-year';
  year: number = 0
  test: boolean = true

  leapYear() {
    if (this.year % 400 == 0) { this.test = true }
    else if (this.year % 400 != 0 && this.year % 100 !=0) {
      if (this.year % 4 == 0) { this.test = true }
      else { this.test = false }
    }
  }
}
