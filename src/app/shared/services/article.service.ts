import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Article } from "../models/article";
import { Category } from "../models/category";
import { Observable, of, Subject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articlesUrl = "api/articles";
  private categoriesUrl = "api/categories";

  private searchTermSource = new Subject<string>();
  termString$ = this.searchTermSource;
  
  private authorSource = new Subject<string>();
  authorString$ = this.authorSource.asObservable();
  
  private dateSource = new Subject<string>();
  dateString$ = this.dateSource.asObservable();
  
  private categorySource = new Subject<string>();
  categoryString$ = this.categorySource.asObservable();

  
  private likesSource = new Subject<number>();
  likesString$ = this.likesSource.asObservable();
  
  
  constructor(private http: HttpClient) {}

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        catchError(this.handleError([]))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      catchError(this.handleError<Article>())
    );
  }

  searchArticles(searchTerm: string): Observable<Article[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articlesUrl}/?title=${searchTerm}`).pipe(
      catchError(this.handleError<Article[]>([]))
    );
  }

  sendSearchTerm(searchTerm: string) {
    this.searchTermSource.next(searchTerm);
  }

  searchByAuthor(author: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?author=${author}`)
  }

  sendAuthor(author: string) {
    this.authorSource.next(author);
  }

  searchByDate(date: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?date=${date}`)
  }

  sendDate(date: string) {
    this.dateSource.next(date);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  sendCategory(category: string) {
    this.categorySource.next(category);
  }

  searchByCategory(category: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?category=${category}`);
  }


  sumOfArticlesInCategoryT() {
    let a = 0;
    return 
    // return console.log(this.http.get<Article[]>(`${this.articlesUrl}/?category=${category}`))
  }

  test(): Observable<any> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?likes=21`)
    // return String(this.http.get(`${this.articlesUrl}/?likes=21`));
    // return console.log((this.http.get(`${this.articlesUrl}/?likes=21`)))
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.articlesUrl, article);
  }

  // sendLikes(likes: number): Observable<Article> {
  //   this.likesSource.next(likes);
  //   console.log(likes);
  //   return this.http.put<Article>(this.articlesUrl, likes, httpOptions);

  // }

  // likes(likes: Article): Observable<Article> {
  //   return this.http.put<Article>(this.articlesUrl, likes, httpOptions);
  // }

  upd(article: Article): Observable<any> {
    return this.http.put(this.articlesUrl, article, httpOptions).pipe(
      catchError(this.handleError<any>())
    );
  }
}
