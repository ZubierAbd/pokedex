import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-gen5",
  templateUrl: "./gen5.component.html",
  styleUrls: ["./gen5.component.css"]
})
export class Gen5Component implements OnInit {
  constructor(private httpClient: HttpClient) {}

  pokemonarray = [];

  getallpokemon() {
    for (let i = 494; i <= 649; i++) {
      this.pokemonarray.push(i);
    }
  }
  ngOnInit() {
    this.getallpokemon();
  }
}
