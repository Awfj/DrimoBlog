import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../../shared/models/article';
import { ArticleService } from '../../shared/services/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  subscription: Subscription;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
    // this.searchArticles();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArticles(): void {
    this.subscription = this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }
}
