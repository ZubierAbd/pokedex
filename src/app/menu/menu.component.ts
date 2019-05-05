import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterModule, Routes } from "@angular/router";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  takemehome() {
    alert();
  }
  constructor() {}

  ngOnInit() {}
}
