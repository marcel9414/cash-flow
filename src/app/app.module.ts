import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ComponentsModule} from './lib/components/components.module';
import { AppComponent } from './app.component';
import {HomeModule} from './views/home/home.module';
import {NotFoundModule} from './views/not-found/not-found.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './lib/components/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HomeModule,
    NotFoundModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
