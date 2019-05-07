import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PokemonboxComponent } from "./pokemonbox/pokemonbox.component";
import { EntryComponent } from "./entry/entry.component";
import { HeaderComponent } from "./header/header.component";
import { Generation2Component } from "./generation2/generation2.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuComponent } from "./menu/menu.component";
import { Generation3Component } from "./generation3/generation3.component";
import { Gen4Component } from "./gen4/gen4.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { Gen1Component } from "./gen1/gen1.component";
import { Gen5Component } from "./gen5/gen5.component";
import { Gen6Component } from "./gen6/gen6.component";
import { Gen7Component } from "./gen7/gen7.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../material.module";
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonboxComponent,
    EntryComponent,
    HeaderComponent,
    Generation2Component,
    MenuComponent,
    Generation3Component,
    Gen4Component,
    Gen1Component,
    Gen5Component,
    Gen6Component,
    Gen7Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
