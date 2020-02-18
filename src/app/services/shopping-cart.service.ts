import { Injectable } from '@angular/core';
import { Bestellung } from '../models/Bestellung';
import { Pizza } from '../models/Pizza';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public bestellungen: Bestellung[] = [];

  constructor() { }
  public addBestellung(pizzaId:number, pizzaGroese:number, extra:string):void{
    var bestellung: Bestellung = new Bestellung();
    bestellung.Id = pizzaId;
    bestellung.Groese = pizzaGroese;
    bestellung.Extra = extra;
    this.bestellungen.push(bestellung);
  }
}
