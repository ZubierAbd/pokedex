import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-gen4",
  templateUrl: "./gen4.component.html",
  styleUrls: ["./gen4.component.css"]
})
export class Gen4Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  pokemonarray = [];

  getallpokemon() {
    for (let i = 387; i <= 493; i++) {
      this.pokemonarray.push(i);
    }
  }

  ngOnInit() {
    this.getallpokemon();
  }
}
