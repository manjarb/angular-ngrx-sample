import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestingComponent } from "./containers/testing/testing.component";
import { Routes, RouterModule } from "@angular/router";

export const ROUTES: Routes = [
  {
    path: "",
    component: TestingComponent
  }
];

@NgModule({
  declarations: [TestingComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class TestingModule {}
