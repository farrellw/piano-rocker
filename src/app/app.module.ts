import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent }  from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModeComponent } from './mode/mode.component';


@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, KeyboardComponent , HeaderComponent, FooterComponent, ModeComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
