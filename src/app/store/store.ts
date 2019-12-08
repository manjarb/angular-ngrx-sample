export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: any };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  get action() {
    return this.reducers;
  }
}
