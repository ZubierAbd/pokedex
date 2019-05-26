import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-generation2",
  templateUrl: "./generation2.component.html",
  styleUrls: ["./generation2.component.css"]
})
export class Generation2Component implements OnInit {
  constructor(private httpClient: HttpClient) {}
  pokemonarray = [];

  getallpokemon() {
    for (let i = 152; i <= 251; i++) {
      this.pokemonarray.push(i);
    }
  }

  ngOnInit() {
    this.getallpokemon();
  }
}
