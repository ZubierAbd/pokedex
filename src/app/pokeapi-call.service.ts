import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokeapiCallService {
  baseurl = "https://pokeapi.co/api/v2/";
  flavorurl = "https://pokeapi.co/api/v2/pokemon-species/";

  callPokemon(index) {
    return this.httpClient.get(this.baseurl + "pokemon/" + index + "/");
  }

  callPokemonSpecies(index) {
    return this.httpClient.get(this.flavorurl + index + "/");
  }
  constructor(private httpClient: HttpClient) {}
}
