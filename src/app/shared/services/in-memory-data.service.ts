import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Article } from "../models/article";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
      {
        id: 11,
        image: {
          path: "../../assets/images/articles/blog-ms-1.jpg",
          width: 358,
          height: 243
        },
        title: "We Develop A New Features For Newcomers",
        author: "Shabuj Khan",
        date: "10 Jan, 2017",
        likes: '21',
        category: 'PC',
        preview:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum.."
      },
      {
        id: 12,
        image: {
          path: "../../assets/images/articles/blog-ms-2.jpg",
          width: 358,
          height: 243
        },
        title: "We Develop A New Features For Newcomers",
        author: "Shabuj Khan",
        date: "13 Jan, 2017",
        likes: '12',
        category: 'Creative',
        preview:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum.."
      },
      {
        id: 13,
        image: {
          path: "../../assets/images/articles/blog-ms-1.jpg",
          width: 358,
          height: 243
        },
        title: "3We Develop A New Features For Newcomers",
        author: "3Shabuj Khan",
        date: "13 Jan, 2017",
        likes: '13',
        category: 'PC',
        preview:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum.."
      },
      {
        id: 14,
        image: {
          path: "../../assets/images/articles/blog-ms-2.jpg",
          width: 358,
          height: 243
        },
        title: "4We Develop A New Features For Newcomers",
        author: "4Shabuj Khan",
        date: "10 Jan, 2017",
        likes: '14',
        category: 'PC',
        preview:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum.."
      }
    ];

    // const categories = ['PC', 'Mobile Apps', 'Creative']
    const categories = [
      {
        name: 'PC',
        sum: 0
      },
      {
        name: 'Mobile Apps',
        sum: 0
      },
      {
        name: 'Creative',
        sum: 0
      }
    ]

    return { articles, categories };
  }

  genId(articles: Article[]): number {
    return articles.length > 0
      ? Math.max(...articles.map(article => article.id)) + 1
      : 11;
  }
}
