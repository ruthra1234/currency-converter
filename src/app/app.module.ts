import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter.component';
import { OnlyNumber } from './onlynumber.directive';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogContent} from './dialog-content';


export class MaterialModule {}

@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    ],
    
  declarations: [ AppComponent,ConverterComponent,DialogContent,OnlyNumber],
  bootstrap: [ConverterComponent,AppComponent],
  providers: []
})

export class AppModule {}

