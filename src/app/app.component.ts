import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  items: number[] | undefined;
  ngOnInit() {
    this.items = Array.from(Array(10000).keys());
  }
}
