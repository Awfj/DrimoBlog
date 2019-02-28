import { Component, OnInit } from "@angular/core";
import { Article } from "../../../shared/models/article";
import { ArticleService } from "../../../shared/services/article.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  page: number;
  articles: Article[];
  article: Article;
  showPagination: boolean = false;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.showSearchResults();
    this.showArticlesByAuthor();
    this.showArticlesByDate();
  }

  showSearchResults() {
    this.articleService.termString$.subscribe(searchTerm => {
      this.articleService.searchArticles(searchTerm).subscribe(articles => {
        this.articles = articles;
        this.togglePagination();
      });
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

  showArticlesByDate() {
    this.articleService.dateString$.subscribe(date => {
      this.articleService.searchByDate(date).subscribe(articles => {
        this.articles = articles;
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
