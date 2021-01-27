import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from "@angular/core";
import { PostMeta } from "src/app/interfaces/post-meta";

@Component({
  selector: "jvdev-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @HostBinding("class.post-card__hover") _hover: boolean;

  @Input() post: PostMeta;

  get thumbnail(): string {
    return this.post?.slug
      ? `assets/posts/${this.post?.slug}/thumbnail.jpg`
      : null;
  }

  get tags(): string[] {
    return this.post?.tags && this.post?.tags?.length ? this.post.tags : null;
  }

  constructor() {}
}
