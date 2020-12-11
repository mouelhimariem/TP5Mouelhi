import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListemployesComponent } from './listemployes/listemployes.component';
import { SpecialemployesComponent } from './specialemployes/specialemployes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListemployesComponent,
    SpecialemployesComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
