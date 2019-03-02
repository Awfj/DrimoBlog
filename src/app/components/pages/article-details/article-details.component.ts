import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { Article } from "../../../shared/models/article";
import { ArticleService } from "../../../shared/services/article.service";

@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.scss"]
})
export class ArticleDetailsComponent implements OnInit, DoCheck {
  article: Article;
  updArticle: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {}

  ngOnInit() {
    // this.getArticle();
    // this.test();
  }

  ngDoCheck() {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
    
  }

  edit(article) {
    this.updArticle = article;
  }

  like() {
    if (this.updArticle) {
      this.articleService.updateArticle(this.updArticle).subscribe(articles => console.log(articles));
    } else {
      console.log('Oops')
    }
    // this.articleService.test().subscribe(as => console.log(as))
    // console.log(this.updArticle)
  }

  // update() {
  //   this.articleService.likes(this.updatedLikes).subscribe(tst => console.log(tst))
  // }

  // likeT(likes: number) {
  //   this.updatedLikes = +likes + 1;
  //   // console.log(this.updatedLikes);
  //   // console.log(typeof this.updatedLikes);

  //   this.articleService.sendLikes(this.updatedLikes);

  // }

  goBack(): void {
    this.location.back();
  }

  
  test() {
    // this.articleService.test().subscribe((as) => console.log(as))
    // this.articleService.test();
    let a = document.querySelector('#test').textContent = '1';
    // let b = +a + 1;

    // console.log(typeof b)
  }
}
