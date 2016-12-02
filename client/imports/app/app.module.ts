import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicApp, IonicModule } from "ionic-angular";
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { HomeComponent } from '../pages/home/home.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    HomeComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent,
    HomeComponent
  ],
  // Providers
  providers: [

  ],
  // Modules
  imports: [
    IonicModule.forRoot(AppComponent),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http] 
    })
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
