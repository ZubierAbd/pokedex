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
  type1 = "";
  type2 = "";
  @Input("index") index: number;
  baseurl = "https://pokeapi.co/api/v2/";
  flavorurl = "https://pokeapi.co/api/v2/pokemon-species/";
  boxcolor = "";
  colorA = "";
  colorB = "";
  height = 0;
  weight = 0;
  evolution = "";
  SPD = "";
  S_DEF = "";
  S_ATK = "";
  ATK = "";
  DEF = "";
  HP = "";
  showModal = false;

  constructor(private httpClient: HttpClient) {}
  getpokemon(index) {
    this.httpClient
      .get(this.baseurl + "pokemon/" + index + "/")
      .subscribe(res => {
        this.pokemonarray.push(res);
        this.name = this.pokemonarray[0].name;
        this.spriteurl = this.pokemonarray[0].sprites.front_default;
        this.pokeid = this.pokemonarray[0].id;
        this.type1 = this.pokemonarray[0].types[0].type.name;
        this.colorA = this.getTypecolor(this.type1, this.colorA);
        if (this.pokemonarray[0].types[1].type.name != "") {
          this.type2 = this.pokemonarray[0].types[1].type.name;
          if (this.type2 != "") {
            this.colorB = this.getTypecolor(this.type2, this.colorB);
          }
        }
        this.height = this.pokemonarray[0].height / 10;
        this.weight = this.pokemonarray[0].weight / 10;
        this.SPD = this.pokemonarray[0].stats[0].base_stat;
        this.S_ATK = this.pokemonarray[0].stats[2].base_stat;
        this.S_DEF = this.pokemonarray[0].stats[1].base_stat;
        this.DEF = this.pokemonarray[0].stats[3].base_stat;
        this.ATK = this.pokemonarray[0].stats[4].base_stat;
        this.HP = this.pokemonarray[0].stats[5].base_stat;
        this.evolution = this.pokemonflavorarray[0].evolves_from_species.name;
      });
  }

  getpokemonflavortext(index) {
    this.httpClient.get(this.flavorurl + index + "/").subscribe(res => {
      this.pokemonflavorarray.push(res);
      if (
        this.pokemonflavorarray[0].flavor_text_entries[0].language.name == "en"
      ) {
        this.description = this.pokemonflavorarray[0].flavor_text_entries[0].flavor_text;
      } else if (
        this.pokemonflavorarray[0].flavor_text_entries[1].language.name == "en"
      ) {
        this.description = this.pokemonflavorarray[0].flavor_text_entries[1].flavor_text;
      } else if (
        this.pokemonflavorarray[0].flavor_text_entries[2].language.name == "en"
      ) {
        this.description = this.pokemonflavorarray[0].flavor_text_entries[2].flavor_text;
      }
    });
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  };

  getTypecolor(type: string, color: string): string {
    if (type == "normal") {
      color = "#A8A878";
    } else if (type == "fire") {
      color = "#f08030";
    } else if (type == "fighting") {
      color = "#c03028";
    } else if (type == "water") {
      color = "#6890f0";
    } else if (type == "flying") {
      color = "#a890f0";
    } else if (type == "grass") {
      color = "#78c850";
    } else if (type == "poison") {
      color = "#a040a0";
    } else if (type == "electric") {
      color = "#f8d030";
    } else if (type == "ground") {
      color = "#e0c068";
    } else if (type == "psychic") {
      color = "#f85888";
    } else if (type == "rock") {
      color = "#b8a038";
    } else if (type == "ice") {
      color = "#98D8D8";
    } else if (type == "bug") {
      color = "#A8B820";
    } else if (type == "dragon") {
      color = "#7038F8";
    } else if (type == "ghost") {
      color = "#705898";
    } else if (type == "dark") {
      color = "#705848";
    } else if (type == "steel") {
      color = "#b8b8d0";
    } else if (type == "fairy") {
      color = "#ee99ac";
    }
    return color;
  }

  getdetails(index) {
    this.getpokemon(index);
    this.getpokemonflavortext(index);
  }
  ngOnInit() {
    this.getdetails(this.index);
  }
}
