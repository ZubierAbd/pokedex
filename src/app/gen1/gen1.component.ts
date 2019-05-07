import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-gen1",
  templateUrl: "./gen1.component.html",
  styleUrls: ["./gen1.component.css"]
})
export class Gen1Component implements OnInit {
  constructor(private httpClient: HttpClient) {}
  baseurl = "https://pokeapi.co/api/v2/";
  flavorurl = "https://pokeapi.co/api/v2/pokemon-species/";
  pokemonarray = [];
  pokemonflavorarray = [];
  name = "";
  pokeid = "";
  spriteurl = "";
  description = "";
  counter = this.pokemonarray.length;
  getpokemon(id) {
    this.httpClient.get(this.baseurl + "pokemon/" + id + "/").subscribe(res => {
      this.pokemonarray.push(res);
    });
  }

  getpokemonflavortext(id) {
    this.httpClient.get(this.flavorurl + id + "/").subscribe(res => {
      this.pokemonflavorarray.push(res);
    });
  }

  getallpokemon() {
    for (let i = 1; i <= 151; i++) {
      this.getpokemon(i);
      this.getpokemonflavortext(i);
      this.pokemonarray.sort();
    }
  }
  getPokemonFromArray() {
    this.name = this.pokemonarray[this.counter].name;
    this.spriteurl = this.pokemonarray[this.counter].sprites.front_default;
    this.pokeid = this.pokemonarray[this.counter].id;
    this.description = this.pokemonflavorarray[
      this.counter
    ].flavor_text_entries[1].flavor_text;
    this.pokemonarray.sort();
  }
  ngOnInit() {
    this.getallpokemon();
  }
}