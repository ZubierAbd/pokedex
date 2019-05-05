import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Gen1Component } from "src/app/gen1/gen1.component";

@Component({
  selector: "app-pokemonbox",
  templateUrl: "./pokemonbox.component.html",
  styleUrls: ["./pokemonbox.component.css"]
})
export class PokemonboxComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}
}
