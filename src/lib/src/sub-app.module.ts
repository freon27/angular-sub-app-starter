import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsComponent } from './component/things/things.component';
import {ThingsService} from './service/things.service';
import {RouterModule} from '@angular/router';
import { ThingDetailComponent } from './component/thing-detail/thing-detail.component';
import { SubAppComponent } from './component/sub-app/sub-app.component';
import { ThingsSearchItemComponent } from './component/things-search-item/things-search-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [ThingsComponent, ThingDetailComponent, SubAppComponent, ThingsSearchItemComponent],
  providers: [ThingsService],
  exports: [ThingsComponent, ThingsSearchItemComponent, SubAppComponent]
})
export class SubAppModule { }
