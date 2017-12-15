import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThingsService} from '../../service/things.service';

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.scss']
})
export class ThingDetailComponent implements OnInit {

  public thing;

  constructor(private route: ActivatedRoute, private thingsService: ThingsService) { }

  ngOnInit() {
    this.thing = this.thingsService.getThing(this.route.snapshot.params['index']);
  }

}
