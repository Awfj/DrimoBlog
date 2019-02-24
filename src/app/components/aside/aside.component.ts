import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 
import { Article } from '../../shared/models/article';
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  articles$: Observable<Article[]>;
  private searchTerms = new Subject<string>();
  // test: boolean;
  
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.articleService.searchArticles(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  // findArticles(): void {
  //   this.test = !this.test;
  // }
}
