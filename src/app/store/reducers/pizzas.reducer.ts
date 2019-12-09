import * as fromPizzas from "../actions/pizzas.action";
import { Pizza } from "src/products/models/pizza.model";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS:
      return {
        ...state,
        loading: true
      };
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        data,
        loaded: true,
        loading: false
      };
    }
    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false
      };
  }

  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
