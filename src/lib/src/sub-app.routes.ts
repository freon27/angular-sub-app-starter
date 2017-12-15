import {Routes} from '@angular/router';
import {ThingsComponent} from './component/things/things.component';
import {ThingDetailComponent} from './component/thing-detail/thing-detail.component';


export const subAppChildRoutes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'things'
  },
  {path: 'things/:index', component: ThingDetailComponent},
  {path: 'things', component: ThingsComponent}

];
