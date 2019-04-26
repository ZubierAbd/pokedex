import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-pokemonbox",
  templateUrl: "./pokemonbox.component.html",
  styleUrls: ["./pokemonbox.component.css"]
})
export class PokemonboxComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  baseurl = "https://pokeapi.co/api/v2/";
  flavorurl = "https://pokeapi.co/api/v2/pokemon-species/";
  pokemonarray = [];
  pokemonflavorarray = [];
  name = "";
  pokeid = "";
  spriteurl = "";
  description = "";
  counter = 0;
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
    for (let i = 1; i <= 30; i++) {
      this.getpokemon(i);
      this.getpokemonflavortext(i);
    }
  }
  getPokemonFromArray() {
    this.name = this.pokemonarray[this.counter].name;
    this.spriteurl = this.pokemonarray[this.counter].sprites.front_default;
    this.pokeid = this.pokemonarray[this.counter].id;
    this.description = this.pokemonflavorarray[
      this.counter
    ].flavor_text_entries[1].flavor_text;
    this.counter += 1;
  }
  ngOnInit() {
    this.getallpokemon();
    //this.pokemonarray.sort();
  }
}
1;
