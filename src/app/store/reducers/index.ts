import * as fromPizzas from "./pizzas.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

// pizzas State
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getPizzaLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);
export const getPizzaLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);
