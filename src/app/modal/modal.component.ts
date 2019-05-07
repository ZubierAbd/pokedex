import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../DialogData";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  @Input() name: string;
  @Input() type1: string;
  @Input() type2: string;
  @Input() description: string;
  @Input() height: string;
  @Input() weight: string;
  @Input() evolution: string;
  @Input() megaform: boolean;
  @Input() speed_num: string;
  @Input() special_def_num: string;
  @Input() special_attack_num: string;
  @Input() defense_num: string;
  @Input() attack_num: string;
  @Input() hp_num: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
