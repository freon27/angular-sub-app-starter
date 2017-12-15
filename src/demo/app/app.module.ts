import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from 'sub-app';
import { SubAppModule} from 'sub-app';
import { SubAppComponent} from 'sub-app';
import { subAppChildRoutes} from 'sub-app';
import {Route, RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';

const baseRoutes = [{
  path: '',
  component: SubAppComponent,
  children: subAppChildRoutes
}];

@NgModule({
  imports:      [ BrowserModule, LibModule, SubAppModule, RouterModule.forRoot(baseRoutes)],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
