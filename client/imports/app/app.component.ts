import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from "ionic-native";
import { Meteor } from 'meteor/meteor';
import { TranslateService } from 'ng2-translate';
import { HomeComponent } from '../pages/home/home.component';
import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  rootPage: any;

  constructor(platform: Platform,
              private translate: TranslateService) {
    this.rootPage = HomeComponent;
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

    translate.addLangs(["pt", "en"])
    translate.setDefaultLang("en");
    translate.use("en")

  }
}
