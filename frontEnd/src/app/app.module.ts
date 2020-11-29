import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppMetadata} from './app.metadata';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routingModule } from './app.router';
import { CoreService } from './core.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,routingModule
  ],
  providers: [
    {provide: 'environment', useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private coreService:CoreService){
    coreService.services = AppMetadata.modules; 
  }
}
