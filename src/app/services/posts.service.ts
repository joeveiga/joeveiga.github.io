import { Injectable } from "@angular/core";

import { PostMeta } from "../interfaces/post-meta";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  readonly posts: PostMeta[] = [
    {
      slug: "my-first-post",
      title:
        "Nostrud ut veniam ea id cupidatat proident velit velit eiusmod incididunt laboris fugiat laborum.",
      date: new Date(),
      description:
        "Id occaecat consequat ad qui laborum. Pariatur consequat proident magna ipsum aliquip excepteur. Incididunt consectetur cupidatat sunt adipisicing cillum aute elit laborum enim. Elit anim in ea ex sunt dolor tempor ad nostrud quis incididunt pariatur ea reprehenderit. Excepteur do dolor fugiat qui ea pariatur ex ullamco voluptate proident dolor sint.",
      tags: ["#nothing", "#at-all"],
    },
    {
      slug: "my-first-post",
      title: "Deserunt minim aliqua reprehenderit officia tempor in.",
      date: new Date(),
      description:
        "Labore quis pariatur minim reprehenderit incididunt tempor cillum.",
      tags: ["#nothing", "#at-all"],
    },
    {
      slug: "my-first-post",
      title: "Id mollit commodo sint ullamco ea velit quis.",
      date: new Date(),
      description:
        "Amet minim duis fugiat cillum cupidatat reprehenderit duis laborum adipisicing minim.",
      tags: ["#nothing", "#at-all"],
    },
    {
      slug: "my-first-post",
      title: "Reprehenderit tempor incididunt ipsum anim pariatur esse.",
      date: new Date(),
      description:
        "Veniam eiusmod ad nulla incididunt magna do deserunt in adipisicing. Nisi elit qui enim Lorem ipsum non magna nisi non consequat exercitation id. Laboris cupidatat quis aliquip irure.",
      tags: ["#nothing", "#at-all"],
    },
    {
      slug: "my-first-post",
      title: "My first awesome test post",
      date: new Date(),
      description: "The description",
      tags: ["#nothing", "#at-all"],
    },
  ];

  constructor() {}
}
