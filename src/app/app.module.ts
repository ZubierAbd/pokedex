import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PokemonboxComponent } from "./pokemonbox/pokemonbox.component";
import { EntryComponent } from "./entry/entry.component";
import { HeaderComponent } from "./header/header.component";
import { Generation2Component } from "./generation2/generation2.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonboxComponent,
    EntryComponent,
    HeaderComponent,
    Generation2Component,
    MenuComponent
  ],
  imports: [BrowserModule, HttpClientModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
