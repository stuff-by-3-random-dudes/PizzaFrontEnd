import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { PizzaService } from '../../services/pizza.service';

import { MatStepperModule, MatStepLabel } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})

export class PizzaItemComponent implements OnInit {
  @Input() pizza:Pizza;

  constructor(public pizzaService:PizzaService, private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  onAdd(groese:number)
  {
    //this.pizzaService.postOrder(this.pizza, groese);
    var extra: string = window.prompt("Extra:");
    this.shoppingCart.addBestellung(this.pizza.id, groese, extra);
  }

}
