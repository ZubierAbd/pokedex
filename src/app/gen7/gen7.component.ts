import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-gen7",
  templateUrl: "./gen7.component.html",
  styleUrls: ["./gen7.component.css"]
})
export class Gen7Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  pokemonarray = [];

  getallpokemon() {
    for (let i = 722; i <= 807; i++) {
      this.pokemonarray.push(i);
    }
  }

  ngOnInit() {
    this.getallpokemon();
  }
}
