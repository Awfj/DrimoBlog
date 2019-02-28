import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../../shared/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  showPagination: boolean = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
        if (this.articles.length > 2) {
          this.showPagination = true;
        } else {
          this.showPagination = false;
        }
      });
  }
}
