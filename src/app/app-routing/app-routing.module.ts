import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Gen5Component } from "src/app/gen5/gen5.component";
import { Gen6Component } from "src/app/gen6/gen6.component";
import { Gen7Component } from "src/app/gen7/gen7.component";
import { Gen1Component } from "src/app/gen1/gen1.component";
import { Generation2Component } from "src/app/generation2/generation2.component";
import { Generation3Component } from "src/app/generation3/generation3.component";
import { Gen4Component } from "src/app/gen4/gen4.component";

const appRoutes: Routes = [
  { path: "", component: Gen1Component },
  { path: "gen2", component: Generation2Component },
  { path: "gen3", component: Generation3Component },
  { path: "gen4", component: Gen4Component },
  { path: "gen5", component: Gen5Component },
  { path: "gen6", component: Gen6Component },
  { path: "gen7", component: Gen7Component }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
