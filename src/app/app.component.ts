import { Component } from '@angular/core';

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  id!: number;
  title!: string;
  slug!: string;
  excerpt!: string;
  body!: string;
  url?: string | null;
  published_date?: string | null;
  image?: string | null;
  thumb?: string | null;
  category_id?: number | null;
  created_at!: string;
  updated_at!: string;
  category?: Category | null;
  tags?: Tag[] | undefined;
}

const PROJECTS: Project[] = [
  {
    "id": 1,
    "title": "Portfolio Showcase",
    "slug": "portfolio-showcase",
    "excerpt": "Numquam rem ea saepe est laborum. Optio dolor voluptas beatae repellendus dolore.",
    "body": "<p>Et nisi ut quis consectetur ut. Autem ut et ut dicta eligendi exercitationem vel tenetur. Tenetur temporibus quibusdam sed accusantium ea corporis reprehenderit numquam. Quae quibusdam possimus labore voluptatibus id.</p><p>Velit sed ex voluptatibus qui quo sunt nostrum. Repudiandae culpa quia doloribus. Odit autem iure cum maxime a.</p><p>Velit corporis sit voluptates et placeat. Dolores occaecati dolor officia ut. Blanditiis ea ut soluta aut voluptatibus similique. A quibusdam explicabo ad ullam illum.</p><p>Necessitatibus quia quas fugit perspiciatis quae doloremque. Saepe qui voluptate minima est officiis debitis. Optio expedita tempore consequatur dolor. Aut dolore est est minima doloribus.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    "tags": []
  },
  {
    "id": 2,
    "title": "SSD Yearbook",
    "slug": "ssd-yearbook",
    "excerpt": "Fugit eius quia facilis. Dolor commodi dolorem quibusdam qui vel aut.",
    "body": "<p>Et eaque odit soluta quis. Quia vel in qui eum dolores praesentium. Perspiciatis repudiandae neque corporis at.</p><p>Sed perspiciatis commodi ut ut. Expedita molestiae odit id velit repellendus cupiditate enim et.</p><p>Nam odit ut voluptatem qui. Optio autem nostrum delectus voluptatem non sunt et consectetur. Molestias maxime veniam quia perferendis voluptate iusto. Quia qui aut ab dolorem.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 1,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": { "id": 1, "slug": "back-end", "name": "Back End" },
    "tags": []
  },
  {
    "id": 3,
    "title": "Movie",
    "slug": "movie",
    "excerpt": "Soluta",
    "body": "<p>Deleniti",
    "url": "http://www.google.ca",
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:43:10.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": [
      {
        "id": 10,
        "name": "CSS",
        "slug": "css",
        "pivot": { "projects_id": 3, "tags_id": 10 }
      },
      {
        "id": 4,
        "name": "React",
        "slug": "react",
        "pivot": { "projects_id": 3, "tags_id": 4 }
      }
    ]
  },
  {
    "id": 4,
    "title": "News Site Homepage",
    "slug": "news-site-homepage",
    "excerpt": "Pariatur temporibus et dolores blanditiis quia eius. Quo minus expedita nesciunt.",
    "body": "<p>Nam ut impedit sit. Aut delectus quod accusamus nihil. Et aut aut id ducimus velit iusto molestiae.</p><p>Distinctio dolores qui magni vitae sint quia qui. Perferendis qui neque aperiam nisi at magni officia. Maiores placeat sunt porro id dignissimos omnis quos nisi. Pariatur saepe qui consequatur perspiciatis mollitia tempore.</p><p>Non recusandae quaerat velit. Voluptate ut est consequuntur vitae.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": []
  },
  {
    "id": 5,
    "title": "JavaScript Game",
    "slug": "javascript-game",
    "excerpt": "Tempore quam sint nisi numquam omnis alias molestiae ut. Placeat commodi cumque omnis ad aliquam.",
    "body": "<p>Mollitia quae qui odio. Nemo voluptatibus ex fuga est et quasi explicabo. Qui voluptatem nostrum officiis doloremque reprehenderit.</p><p>Ut aut ut placeat non reiciendis et. Repudiandae voluptatibus vitae temporibus. Sit illum molestiae deleniti quia autem. Non est dolore inventore reiciendis sed quia ea earum.</p><p>Est adipisci eos velit cumque. Suscipit culpa qui inventore. Quidem voluptatibus est omnis odio in fuga. Quos ipsam voluptas quas alias assumenda.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 2,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": { "id": 2, "slug": "front-end", "name": "Front End" },
    "tags": []
  },
  {
    "id": 6,
    "title": "iOS App",
    "slug": "ios-app",
    "excerpt": "Assumenda est aut quisquam ipsa aliquam consequatur magni. Cupiditate sed perferendis delectus.",
    "body": "<p>Harum quam ut officia architecto soluta dolorum odit. Id est vitae eos exercitationem corporis rerum voluptas. Enim aliquid aliquid non est. Dolor consequuntur ullam qui tempore veritatis praesentium perspiciatis.</p><p>Sunt dicta sapiente voluptatum qui rerum repellat. Dolor ea quia aperiam ut reprehenderit vel dolorem. Ipsam praesentium illum amet eius tempore.</p><p>Deleniti rerum et ut reprehenderit quis veritatis. Qui temporibus et corrupti molestiae. Rerum illo ullam ut reiciendis. Dolorum atque id illum numquam.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": null,
    "tags": []
  },
  {
    "id": 7,
    "title": "Android App",
    "slug": "android-app",
    "excerpt": "Eligendi quo perspiciatis at est maiores enim ea et. Numquam cum ipsum exercitationem expedita similique quis ut.",
    "body": "<p>Porro commodi odio aut fugiat voluptatem. Exercitationem aut odio optio id voluptatem est. Itaque nihil expedita pariatur.</p><p>Aperiam accusamus expedita unde quasi eius aspernatur qui. Et quia vel tenetur ut recusandae architecto perspiciatis. Et et laudantium in voluptate. Est fuga expedita quia et.</p><p>Harum accusantium fugiat sed occaecati. Iusto unde labore in ut deleniti molestiae. Deleniti dolor et repudiandae ullam vel. Occaecati aut modi ducimus aut incidunt.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": null,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": null,
    "tags": []
  },
  {
    "id": 8,
    "title": "Industry Project",
    "slug": "industry-project",
    "excerpt": "Molestiae quaerat alias non nostrum animi laborum. Voluptas aut explicabo quam nihil culpa quia iure.",
    "body": "<p>Rem nulla eaque doloribus. Veniam omnis omnis voluptas. Laudantium laudantium nulla distinctio officiis molestiae sit cupiditate. Rem consequuntur quia fugit qui.</p><p>Dolor ut voluptatibus placeat ex fugiat praesentium. A error aperiam hic unde consequatur excepturi mollitia. Molestiae aut quam est commodi recusandae.</p><p>Voluptate suscipit rerum ut. Aspernatur magni omnis ratione magni voluptas sequi quo nostrum. Quis asperiores voluptates enim vel atque saepe deleniti. Et sed provident veniam accusantium in necessitatibus.</p><p>Omnis dicta totam et facere. Ut vel dolor blanditiis molestiae suscipit corporis. Vero et ullam ut unde velit accusantium temporibus non.</p><p>Impedit suscipit sunt quos architecto quis aut voluptatem et. Expedita libero voluptatibus ipsum fugiat. Aut rerum eos nulla facere. Neque maxime alias eum non quae.</p><p>Cumque tempore ipsa quisquam aperiam ut. Nostrum modi aut omnis quia ea. Odit quaerat quod animi ea velit quidem praesentium. Reiciendis iste recusandae aut dolor.</p>",
    "url": null,
    "published_date": null,
    "image": null,
    "thumb": null,
    "category_id": 3,
    "created_at": "2023-02-24T01:10:14.000000Z",
    "updated_at": "2023-02-24T01:10:14.000000Z",
    "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
    "tags": []
  }
];

const CATEGORIES: Category[] = [
  { "id": 1, "slug": "back-end", "name": "Back End" },
  { "id": 2, "slug": "front-end", "name": "Front End" },
  { "id": 3, "slug": "full-stack", "name": "Full Stack" }
];

const TAGS: Tag[] = [
  { "id": 1, "name": "PHP", "slug": "php" },
  { "id": 2, "name": "Laravel", "slug": "laravel" },
  { "id": 3, "name": "Node.js", "slug": "node-js" },
  { "id": 4, "name": "React", "slug": "react" },
  { "id": 5, "name": "AWS", "slug": "aws" },
  { "id": 6, "name": "C#", "slug": "c-sharp" },
  { "id": 7, "name": ".NET", "slug": "dotnet" },
  { "id": 8, "name": "Vue", "slug": "vue" },
  { "id": 9, "name": "Angular", "slug": "angular" },
  { "id": 10, "name": "CSS", "slug": "css" },
  { "id": 11, "name": "HTML5", "slug": "html5" },
  { "id": 12, "name": "SASS", "slug": "sass" },
  { "id": 13, "name": "JavaScript", "slug": "javascript" }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css', 'app.component.scss']
})
export class AppComponent {
  title: string = 'SSD Portfolio';
  date: Date = new Date();
  author: string = 'Adam Rodrigues';
  categories: Category[] = CATEGORIES;
  tags: Tag[] = TAGS;
  projects: Project[] = PROJECTS;
  categoryFilter: Category | undefined = undefined;
  tagFilter: Tag | undefined = undefined;

  setCategoryFilter(category: Category | undefined) {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag | undefined) {
    this.tagFilter = tag;
  }

  setCategoryFilterOnSelect(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    const selectedCategory = this.categories.find(
      category => category.id === parseInt(id)
    )
    this.setCategoryFilter(selectedCategory); 
  }

  setTagFilterOnSelect(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    const selectedTag = this.tags.find(
      tag => tag.id === parseInt(id)
    )
    this.setTagFilter(selectedTag); 
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
