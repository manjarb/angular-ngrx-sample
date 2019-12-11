import { PizzasEffects } from "./pizzas.effect";
import { ToppingsEffects } from "./toppings.effect";
import { RouterEffects } from "./router.effect";

export const effects: any[] = [PizzasEffects, ToppingsEffects, RouterEffects];

export * from "./pizzas.effect";
export * from "./toppings.effect";
export * from "./router.effect";
