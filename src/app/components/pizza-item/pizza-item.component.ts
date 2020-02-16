import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})

export class PizzaItemComponent implements OnInit {
  @Input() pizza:Pizza;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(groese:number)
  {
    alert(groese);
  }

}
