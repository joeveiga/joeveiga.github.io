import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";

import { PostMeta } from "src/app/interfaces/post-meta";

@Component({
  selector: "jvdev-post-meta",
  templateUrl: "./post-meta.component.html",
  styleUrls: ["./post-meta.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostMetaComponent implements OnInit {
  @Input() meta: PostMeta;

  constructor() {}

  ngOnInit(): void {}
}
