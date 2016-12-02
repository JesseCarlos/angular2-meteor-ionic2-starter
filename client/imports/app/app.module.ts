import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IonicApp, IonicModule } from "ionic-angular";
import { HomeComponent } from '../pages/home/home.component';

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
    IonicModule.forRoot(AppComponent)
  ],
  // Main Component
  bootstrap: [ IonicApp ]
})
export class AppModule {}
