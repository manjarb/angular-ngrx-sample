import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";

import * as pizzaActions from "../actions/pizzas.action";
import * as fromServices from "../../../products/services";

import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PizzasEffects {
  constructor(
    private action$: Actions,
    private pizzasService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizza$ = this.action$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      );
    })
  );
}
