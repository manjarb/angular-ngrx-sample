import * as fromPizzas from "../actions/pizzas.action";
import { Pizza } from "src/products/models/pizza.model";

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
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
      const pizzas = action.payload;
      const entities = pizzas.reduce(
        (entity: { [id: number]: Pizza }, pizza: Pizza) => {
          return {
            ...entity,
            [pizza.id]: pizza
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        entities,
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
export const getPizzasEntities = (state: PizzaState) => state.entities;
