import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-generation3",
  templateUrl: "./generation3.component.html",
  styleUrls: ["./generation3.component.css"]
})
export class Generation3Component implements OnInit {
  constructor(private httpClient: HttpClient) {}
  pokemonarray = [];

  getallpokemon() {
    for (let i = 252; i <= 386; i++) {
      this.pokemonarray.push(i);
    }
  }
  ngOnInit() {
    this.getallpokemon();
  }
}
