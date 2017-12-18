import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  meaning: number;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }
}
