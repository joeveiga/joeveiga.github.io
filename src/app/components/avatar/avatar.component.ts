import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "jvdev-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
