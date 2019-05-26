import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-gen6",
  templateUrl: "./gen6.component.html",
  styleUrls: ["./gen6.component.css"]
})
export class Gen6Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  pokemonarray = [];

  getallpokemon() {
    for (let i = 650; i <= 721; i++) {
      this.pokemonarray.push(i);
    }
  }

  ngOnInit() {
    this.getallpokemon();
  }
}
