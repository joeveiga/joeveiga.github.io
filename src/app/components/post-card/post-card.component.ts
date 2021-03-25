import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from "@angular/core";
import { PostMeta } from "src/app/interfaces/post-meta";

@Component({
  selector: "jvdev-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @Input() post: PostMeta;

  @Output() cardClick = new EventEmitter<PostMeta>();

  @HostBinding("style.--post-card-thumbnail")
  get thumbnail(): string {
    return this.post?.slug
      ? `url(assets/posts/${this.post?.slug}/thumbnail.jpg)`
      : null;
  }

  get tags(): string[] {
    return this.post?.tags && this.post?.tags?.length ? this.post.tags : null;
  }

  constructor() {}

  onClick(): void {
    this.cardClick.emit(this.post);
  }
}
