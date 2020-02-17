import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { PizzaService } from '../../services/pizza.service';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})

export class PizzaItemComponent implements OnInit {
  @Input() pizza:Pizza;

  constructor(public pizzaService:PizzaService) { }

  ngOnInit(): void {
  }

  onAdd(groese:number)
  {
    //alert(groese);
    this.pizzaService.postOrder(this.pizza, groese);
  }

}
