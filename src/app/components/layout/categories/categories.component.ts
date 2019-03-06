import { Component, OnInit } from '@angular/core';
import { Category } from "../../../shared/models/category";
import { ArticleService } from '../../../shared/services/article.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  sumOfArticlesInCategory;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getCategories();
    this.displaySumOfArticlesInCategory();
    // this.showArticlesWithCategory()
  }

  getCategories() {
    this.articleService.getCategories().subscribe(categories => this.categories = categories);
  }

  searchByCategory(category: string) {
    this.articleService.sendCategory(category);
  }

  displaySumOfArticlesInCategory() {
    this.articleService.sumOfArticlesInCategoryT();
  }

  
  // showArticlesWithCategory() {
  //   this.articleService.categoryString$.subscribe(category => {
  //     this.articleService.searchByCategory(category).subscribe(articles => {
  //       this.sumOfArticlesInCategory = articles.length;
  //       console.log(this.sumOfArticlesInCategory)
  //     });
  //   });
  // }
}
