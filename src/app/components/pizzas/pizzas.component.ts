import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/Pizza';
import { PizzaService } from '../../services/pizza.service';

import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas:Pizza[];
  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }

}
