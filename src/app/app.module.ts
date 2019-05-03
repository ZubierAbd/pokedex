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

@NgModule({
  declarations: [
    AppComponent,
    PokemonboxComponent,
    EntryComponent,
    HeaderComponent,
    Generation2Component,
    MenuComponent,
    Generation3Component,
    Gen4Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
