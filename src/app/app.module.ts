import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TreetableModule } from 'ng-material-treetable';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TreetableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
