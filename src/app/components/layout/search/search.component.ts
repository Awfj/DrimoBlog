import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../shared/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.articleService.sendSearchTerm(searchTerm);
    }
  }
}
