import { Component, OnInit } from "@angular/core";
import { Article } from "../../../shared/models/article";
import { ArticleService } from "../../../shared/services/article.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.tss();
  }

  tss() {
    this.articleService.termString$.subscribe(searchTerm => {
      this.articleService
        .searchArticles(searchTerm)
        .subscribe(articles => (this.articles = articles));
    });
  }
}
