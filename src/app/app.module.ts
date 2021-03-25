import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostComponent } from "./pages/post/post.component";

import { PostCardComponent } from "./components/post-card/post-card.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "posts/:slug",
    component: PostComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostCardComponent,
    AvatarComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
