import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter.component';

@NgModule({
    declarations: [
        AppComponent,ConverterComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],

    providers: [],
    bootstrap: [ConverterComponent,AppComponent]
})
export class AppModule { }
