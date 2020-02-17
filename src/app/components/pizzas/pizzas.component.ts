import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/Pizza';
import { PizzaService } from '../../services/pizza.service';

import { MatTableModule } from '@angular/material/table';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PizzasComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name'];
  expandedElement: Pizza | null;
  pizzas:Pizza[];
  constructor(private pizzaService:PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }

}
