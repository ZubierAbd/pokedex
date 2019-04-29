import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PokemonboxComponent } from './pokemonbox/pokemonbox.component';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, PokemonboxComponent, EntryComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
