import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyStoreModule } from './mystore/mystore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
