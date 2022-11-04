import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OutSideEventHandlerDirective } from './out-side-event-handler.directive'
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OutSideEventHandlerDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
