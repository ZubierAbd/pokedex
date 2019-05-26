import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PokeapiCallService } from "../pokeapi-call.service";

@Component({
  selector: "app-gen1",
  templateUrl: "./gen1.component.html",
  styleUrls: ["./gen1.component.css"]
})
export class Gen1Component implements OnInit {
  constructor(private httpClient: HttpClient) {}
  pokemonarray = [];

  getallpokemon() {
    for (let i = 1; i <= 10; i++) {
      this.pokemonarray.push(i);
    }
    console.log(this.pokemonarray);
  }

  ngOnInit() {
    this.getallpokemon();
  }
}
