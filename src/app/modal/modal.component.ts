import { Component, OnInit, Inject, Input } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor() {}
  @Input() show = false;
  @Input() closeCallback = () => false;
  @Input() customClass = "";
  // @Input("name") name: string;
  // @Input("type1") type1: string;
  // @Input("type2") type2: string;
  // @Input("description") description: string;
  // @Input("height") height: string;
  // @Input("weight") weight: string;
  // @Input("evolution") evolution: string;
  // @Input("SPD") speed_num: string;
  // @Input("S.DEF") special_def_num: string;
  // @Input("S.ATK") special_attack_num: string;
  // @Input("DEF") defense_num: string;
  // @Input("ATK") attack_num: string;
  // @Input("HP") hp_num: string;

  ngOnInit() {}
}
