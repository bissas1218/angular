import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyStoreModule } from './mystore/mystore.module';
import { HttpClientModule } from '@angular/common/http';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';
import { LoggerService } from './lifecycle-hooks/logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    MyStoreModule,
    HttpClientModule,
    LifecycleHooksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    
  ]
})
export class AppModule { }
