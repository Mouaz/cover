import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './components/greeting/greeting.component';
import {MapsComponent} from './components/maps/maps.component'
import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [GreetingComponent,MapsComponent],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  exports: [GreetingComponent,MapsComponent]
})
export class MainModule { }
