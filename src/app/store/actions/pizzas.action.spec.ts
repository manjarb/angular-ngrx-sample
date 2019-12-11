import * as fromPizzas from "./pizzas.action";

describe("Pizzas Actions", () => {
  describe("LoadPizzas Actions", () => {
    describe("LoadPizzas", () => {
      it("should create an action", () => {
        const action = new fromPizzas.LoadPizzas();

        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      });
    });

    describe("LoadPizzasFail", () => {
      it("should create an action", () => {});
    });

    describe("LoadPizzasSuccess", () => {
      it("should create an action", () => {});
    });
  });

  describe("CreatePizza Actions", () => {
    describe("CreatePizza", () => {
      it("should create an action", () => {});
    });

    describe("CreatePizzaFail", () => {
      it("should create an action", () => {});
    });

    describe("CreatePizzaSuccess", () => {
      it("should create an action", () => {});
    });
  });

  describe("UpdatePizza Actions", () => {
    describe("UpdatePizza", () => {
      it("should create an action", () => {});
    });

    describe("UpdatePizzaFail", () => {
      it("should create an action", () => {});
    });

    describe("UpdatePizzaSuccess", () => {
      it("should create an action", () => {});
    });
  });

  describe("RemovePizza Actions", () => {
    describe("RemovePizza", () => {
      it("should create an action", () => {});
    });

    describe("RemovePizzaFail", () => {
      it("should create an action", () => {});
    });

    describe("RemovePizzaSuccess", () => {
      it("should create an action", () => {});
    });
  });
});
