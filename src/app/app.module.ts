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
import {DialogContent, DialogContentDialog} from './dialog-content';
import { 
  MatButtonModule,
  MatDialogModule,
  MatStepperModule
 
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatDialogModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({

    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    ],

  entryComponents: [DialogContent, DialogContentDialog],
  declarations: [ AppComponent,ConverterComponent,DialogContent, DialogContentDialog, OnlyNumber],
  bootstrap: [ConverterComponent,AppComponent],
  providers: []
})

export class AppModule {}

