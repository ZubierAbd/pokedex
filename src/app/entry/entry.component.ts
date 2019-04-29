import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.css"]
})
export class EntryComponent implements OnInit {
  name = "";
  pokeid = "";
  spriteurl = "";
  description = "";
  pokemonarray = [];
  pokemonflavorarray = [];
  counter: number = 0;
  @Input("index") index: number;
  baseurl = "https://pokeapi.co/api/v2/";
  flavorurl = "https://pokeapi.co/api/v2/pokemon-species/";

  constructor(private httpClient: HttpClient) {}
  getpokemon(index) {
    this.httpClient
      .get(this.baseurl + "pokemon/" + index + "/")
      .subscribe(res => {
        this.pokemonarray.push(res);
        this.name = this.pokemonarray[0].name;
        this.spriteurl = this.pokemonarray[0].sprites.front_default;
        this.pokeid = this.pokemonarray[0].id;
      });
  }
  getpokemonflavortext(index) {
    this.httpClient.get(this.flavorurl + index + "/").subscribe(res => {
      this.pokemonflavorarray.push(res);
      this.description = this.pokemonflavorarray[0].flavor_text_entries[1].flavor_text;
    });
  }
  getdetails(index) {
    this.getpokemon(index);
    this.getpokemonflavortext(index);
  }
  ngOnInit() {
    this.getdetails(this.index);
  }
}
