import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { map, catchError, switchMap } from "rxjs/operators";

import * as toppingsActions from "../actions/topping.action";
import * as fromServices from "../../../products/services/toppings.service";
import { of } from "rxjs";

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$.pipe(
    ofType(toppingsActions.LOAD_TOPPINGS),
    switchMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(toppings => new toppingsActions.LoadToppingsSuccess(toppings)),
        catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
      );
    })
  );
}
