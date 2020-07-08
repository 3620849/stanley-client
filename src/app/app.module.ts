import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { NewBookDialogComponent } from './new-book-dialog/new-book-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookDialogComponent,
    BuyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
