import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pizza } from '../models/Pizza';
import { Observable } from 'rxjs';

import { Bestellung } from '../models/Bestellung';
import { ShoppingCartService } from './shopping-cart.service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  //pizzasUrl:string = 'https://pizzabestellungapi.azurewebsites.net/pizza';
  pizzasUrl:string = 'https://pizzabestellungapi.azurewebsites.net/angpizza';
  bestellsUrl:string = 'https://pizzabestellungapi.azurewebsites.net/bestell';
  loginUrl:string = 'https://pizzabestellungapi.azurewebsites.net/login';

  public groesenArray:string[] = ['Preis', 'Klein', 'Mittel', 'Groß'];
  private username: string;

  constructor(private http:HttpClient, private shoppingCart:ShoppingCartService) { }

  getPizzas():Observable<Pizza[]>
  {
    //return [{"id":13,"name":"Gemischter Salat","groesen":[1,3],"preise":[4,5.5]},{"id":16,"name":"Salatplatte \"Marco\"","groesen":[1,3],"preise":[4.9,6.5]},{"id":23,"name":"Spaghetti Carbonara","groesen":[0],"preise":[6.5]},{"id":28,"name":"Spaghetti \"Amatriciana\"","groesen":[0],"preise":[6.8]},{"id":49,"name":"Pizza \"Spezial\" (Salami, Schinken, Chapignons, Paprika)","groesen":[1,2,3],"preise":[5,6.1,7.6]},{"id":51,"name":"Pizza Schinken, Champignons","groesen":[1,2,3],"preise":[4.5,5.5,7]},{"id":53,"name":"Pizza Thunfisch, Zwiebeln","groesen":[1,2,3],"preise":[4.5,5.5,7]},{"id":54,"name":"Pizza Thunfisch","groesen":[3,1,2],"preise":[6.6,4,5.1]},{"id":55,"name":"Pizza Margharita","groesen":[1,2,3],"preise":[4,4.6,6.1]},{"id":58,"name":"Pizza Salami, Champignons","groesen":[1,2,3],"preise":[4.5,5.5,7]},{"id":62,"name":"Pizza Schinken","groesen":[2,3,1],"preise":[5.1,6.6,4]},{"id":63,"name":"Pizza Champignons","groesen":[1,2,3],"preise":[4,5.1,6.6]},{"id":64,"name":"Pizza Salami","groesen":[1,2,3],"preise":[4,5.1,6.6]},{"id":65,"name":"Pizza Peperoni","groesen":[1,2,3],"preise":[4,5.1,6.6]},{"id":66,"name":"Pizza Zwiebeln","groesen":[1,2,3],"preise":[4,5.1,6.6]},{"id":69,"name":"Pizza Salami, Schinken","groesen":[3,1,2],"preise":[7,4.5,5.5]},{"id":74,"name":"Pizza Salami, Schinken, Champignons","groesen":[1,2,3],"preise":[4.8,5.8,7.3]},{"id":99999,"name":"Pizzabrot","groesen":[1,2,3],"preise":[3,3.5,4]}];
    return this.http.get<Pizza[]>(this.pizzasUrl);
  }

  postVerify(username:string, passwort:string):Observable<Boolean>
  {
    this.username = username;
   
    console.log("INPWD");
    
    var oklog = this.http.post<Boolean>(this.loginUrl, {"username":username, "password":passwort});
    oklog.subscribe(x => {
      console.log("in sub" + x)});
    return oklog;
  }

  postBestellung():Observable<String>
  {
    this.shoppingCart.bestellungen.forEach(bestellung => {
      bestellung.Besteller = this.username;
    });
    return this.http.post<string>(this.bestellsUrl, JSON.parse(JSON.stringify(this.shoppingCart.bestellungen)));
  }

  postOrder(pizza:Pizza, groese:number):void
  {
    console.log("deprecated!!!!");
    var b:Bestellung = new Bestellung();
    var username:string = window.prompt("Digikabu UserName:");
    console.log(username);
    if(username != null && username.trim() !== ""){
       var passwort:string = window.prompt("Digikabu Passwort");
      if(passwort != null  && passwort.trim() !== ""){
        var oklog = this.http.post<Boolean>(this.loginUrl, {"username":username, "password":passwort});
        oklog.subscribe(x => {
          if(x){
            b.Besteller = username;
            b.Extra = window.prompt("Extra:");
            b.Groese = groese;
            b.Id = pizza.id;
            // var x = this.http.post<Bestellung>(this.bestellsUrl, [{
            //   "Id":b.Id,
            //   "Groese":b.Groese,
            //   "Besteller":b.Besteller,
            //   "Extra":b.Extra
            // }]);
           var bs:Bestellung[] = [];
            bs.push(b);
            
      
            var s = this.http.post<string>(this.bestellsUrl, JSON.parse(JSON.stringify(bs)));
            s.subscribe(
              v => {
                alert(v);
              }
            )
          }
          else
          {
            alert("Fehlerhafte anmeldedaten");
          }
        });
      }
      
    }
  }
}
