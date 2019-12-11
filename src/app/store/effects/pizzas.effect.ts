import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";

import * as fromRoot from "../../store";
import * as pizzaActions from "../actions/pizzas.action";
import * as fromServices from "../../../products/services";

import { switchMap, map, catchError } from "rxjs/operators";
import { of, from } from "rxjs";

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzasService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizza$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      return this.pizzasService.getPizzas().pipe(
        map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
      );
    })
  );

  @Effect()
  createPizza$ = this.actions$.pipe(
    ofType(pizzaActions.CREATE_PIZZA),
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.createPizza(pizza).pipe(
        map(res => new pizzaActions.CreatePizzaSuccess(res)),
        catchError(error => of(new pizzaActions.CreatePizzaFail(error)))
      );
    })
  );

  @Effect()
  createPizzaSuccess$ = this.actions$.pipe(
    ofType(pizzaActions.CREATE_PIZZA_SUCCESS),
    map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
    map(
      pizza =>
        new fromRoot.Go({
          path: ["/products", pizza.id]
        })
    )
  );

  @Effect()
  updatePizza$ = this.actions$.pipe(
    ofType(pizzaActions.UPDATE_PIZZA),
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.updatePizza(pizza).pipe(
        map(res => new pizzaActions.UpdatePizzaSuccess(res)),
        catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
      );
    })
  );

  @Effect()
  removePizza$ = this.actions$.pipe(
    ofType(pizzaActions.REMOVE_PIZZA),
    map((action: pizzaActions.RemovePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzasService.removePizza(pizza).pipe(
        map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
        catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
      );
    })
  );

  @Effect()
  handlePizzaSuccess$ = this.actions$.pipe(
    ofType(
      pizzaActions.UPDATE_PIZZA_SUCCESS,
      pizzaActions.REMOVE_PIZZA_SUCCESS
    ),
    map(pizza => {
      return new fromRoot.Go({
        path: ["/products"]
      });
    })
  );
}
