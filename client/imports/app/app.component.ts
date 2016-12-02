import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { Meteor } from 'meteor/meteor';
import template from './app.component.html';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  rootPage: any;

  constructor(platform: Platform) {
    this.rootPage = HomeComponent;
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
