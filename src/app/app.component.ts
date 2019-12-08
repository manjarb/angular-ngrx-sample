import { Component } from "@angular/core";

interface ITodo {
  label: string;
  complete: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-ngrx-sample";
  collection: ITodo[] = [];

  addTodo(input) {
    if (!input.value.trim()) return;
    const payload = { label: input.value, complete: false };

    console.log(payload);

    input.value = "";
  }

  deleteTodo() {}
}
