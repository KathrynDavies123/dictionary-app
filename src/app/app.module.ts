import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
