import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../shared/models/article';
import { ArticleService } from '../../../shared/services/article.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
    
  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(["/search-results"]);
      this.articleService.sendSearchTerm(searchTerm);
      // this.articleService.searchArticles(searchTerm)
      //   .subscribe(articles => this.articles = articles);
    }
  }
  
  // search(searchTerm: string) {
  //   if (searchTerm) {
  //     this.router.navigate(["/search-results"]);
  //     this.articleService.searchArticles(searchTerm)
  //       .subscribe(articles => this.articles = articles);
  //   }
  // }
}
