import { Component, OnInit } from '@angular/core';
import { MatStepperModule, MatStepLabel } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { PizzaService } from '../services/pizza.service';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarLoginComponent } from '../components/snack-bar-login/snack-bar-login.component';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-stepper-menu',
  templateUrl: './stepper-menu.component.html',
  styleUrls: ['./stepper-menu.component.css']
})
export class StepperMenuComponent implements OnInit {
  public ok: Boolean = false;
  
  public auswaehlbar: Boolean = true;
  public bestellbar: Boolean = false;

  public bestellungen: String;

  constructor(private pizzaService:PizzaService, private _snackBar: MatSnackBar, public shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
  }

  pruefe(un:string, pw:string)
  {
    var bool:Observable<Boolean> = this.pizzaService.postVerify(un, pw);
    
    bool.subscribe(x => {
      if(x === false){
        this.openSnackBar();
      }
      else if (x === true)
      {
        //this.bestellen();
      }
      this.ok = x;
    });
  }

  bestellen()
  {
    // var bestellungen = this.pizzaService.postAlleBestellungen();
    // bestellungen.forEach(bestellung => {
    //   bestellung.subscribe(x => {
    //     console.log(x);
    //   })
    // });
    var bestellung = this.pizzaService.postBestellung();
    bestellung.subscribe( x => {
      //this.bestellungen.push(x);
      this.bestellungen = x;
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarLoginComponent, {
      duration: 5 * 1000,
    });
  }
}