import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
