import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../../shared/services/article.service';
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
  faUser = faUser;
  faClock = faClock;
  
  articles: Article[] = [];
  

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.showRecentArticles();
  }

  showRecentArticles() {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

  searchByAuthor(author: string) {
    this.articleService.sendAuthor(author);
  }

  searchByDate(date: string) {
    this.articleService.sendDate(date);
  }
}
