import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PostMeta } from "src/app/interfaces/post-meta";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "jvdev-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  meta$: Observable<PostMeta>;
  url$: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService
  ) {
    const slugParam = this.route.paramMap.pipe(
      map((params) => params.get("slug"))
    );

    this.meta$ = slugParam.pipe(
      map((slug) => this.postsService.posts.find((meta) => meta.slug === slug))
    );

    this.url$ = slugParam.pipe(map((slug) => `assets/posts/${slug}`));
  }

  ngOnInit(): void {}
}
