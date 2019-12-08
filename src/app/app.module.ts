import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import * as fromStore from "./store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

const store = new fromStore.Store(
  {},
  {
    todos: [{ label: "Eat pizza", complete: false }]
  }
);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(store.action)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
