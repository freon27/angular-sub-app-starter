import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from 'quickstart-lib';
import { SubAppModule} from 'quickstart-lib';
import { SubAppComponent} from 'quickstart-lib';
import { subAppChildRoutes} from 'quickstart-lib';
import {Route, RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';

const baseRoutes = [{
  path: 'sub',
  component: SubAppComponent,
  children: subAppChildRoutes
}];

@NgModule({
  imports:      [ BrowserModule, LibModule, SubAppModule, RouterModule.forRoot(baseRoutes)],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
