import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StepperMenuComponent } from './stepper-menu/stepper-menu.component';
import { SnackBarLoginComponent } from './components/snack-bar-login/snack-bar-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaItemComponent,
    StepperMenuComponent,
    SnackBarLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatGridListModule,
    // MatExpansionModule,
    // MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatStepperModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
