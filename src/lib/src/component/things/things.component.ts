import { Component, OnInit } from '@angular/core';
import {ThingsService} from '../../service/things.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.scss']
})
export class ThingsComponent implements OnInit {

  public data: any[]
  public country = '';
  public type = '';

  constructor(private thingsService: ThingsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.thingsService.getAll();

    this.activatedRoute.parent.params.subscribe(params => {
      this.country = params['country'];
      this.type = params['type'];
    });
  }

}
