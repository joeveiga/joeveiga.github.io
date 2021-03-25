import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PostMeta } from "src/app/interfaces/post-meta";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "jvdev-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  get posts(): PostMeta[] {
    return this.postsService.posts;
  }

  constructor(
    private readonly router: Router,
    private readonly postsService: PostsService
  ) {}

  ngOnInit(): void {}

  onPostClicked(post: PostMeta): void {
    this.router.navigate(["posts", post.slug]);
  }
}
