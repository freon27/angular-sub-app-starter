import {Component, OnInit} from '@angular/core';
import { LibService } from 'quickstart-lib';
import {Router} from '@angular/router';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  meaning: number;
  constructor(libService: LibService, private router: Router) {
    this.meaning = libService.getMeaning();
  }

  ngOnInit() {
    console.log('configured routes: ', this.router.config);
  }
}
