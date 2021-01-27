import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { PostComponent } from "./pages/post/post.component";

import { PostCardComponent } from "./components/post-card/post-card.component";
import { AvatarComponent } from './components/avatar/avatar.component';

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
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
