import { Component, OnInit } from "@angular/core";
import { Article } from "../../../shared/models/article";
import { ArticleService } from "../../../shared/services/article.service";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  page: number;
  articles: Article[];
  articles$: Observable<Article[]>;
  article: Article;
  showPagination: boolean = false;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.showSearchResults();
    this.showArticlesByAuthor();
    this.showArticlesWithDate();
    this.showArticlesWithCategory();
  }

  // showSearchResults() {
  //   this.articleService.termString$.subscribe(searchTerm => {
  //     this.articleService.searchArticles(searchTerm).subscribe(articles => {
  //       this.articles = articles;
  //       this.togglePagination();
  //     });
  //   });
  // }

  showSearchResults() {
    this.articles$ = this.articleService.termString$.pipe(
      switchMap((term: string) => this.articleService.searchArticles(term))
    );
    this.articles$.subscribe(articles => {
      if (articles.length > 2) {
        this.showPagination = true;
      } else {
        this.showPagination = false;
      }
    });
  }

  showArticlesByAuthor() {
    this.articleService.authorString$.subscribe(author => {
      this.articleService.searchByAuthor(author).subscribe(articles => {
        this.articles = articles;
        this.togglePagination();
      });
    });
  }

  showArticlesWithDate() {
    this.articleService.dateString$.subscribe(date => {
      this.articleService.searchByDate(date).subscribe(articles => {
        this.articles = articles;
        this.togglePagination();
      });
    });
  }

  showArticlesWithCategory() {
    this.articleService.categoryString$.subscribe(category => {
      this.articleService.searchByCategory(category).subscribe(articles => {
        this.articles = articles;
        // console.log(articles.length)
        this.togglePagination();
      });
    });
  }

  togglePagination() {
    if (this.articles.length > 2) {
      this.showPagination = true;
    } else {
      this.showPagination = false;
    }
  }
}
