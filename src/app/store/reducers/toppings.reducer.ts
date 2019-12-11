import * as fromToppings from "../actions/topping.action";
import { Topping } from "../../../products/models/topping.model";

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromToppings.ToppingsAction
): ToppingsState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = (action as fromToppings.LoadToppingsSuccess).payload;
      const entities = toppings.reduce(
        (entity: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entity,
            [topping.id]: topping
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
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
// export const getSelectedToppings = (state: ToppingsState) =>
//   state.selectedToppings;
