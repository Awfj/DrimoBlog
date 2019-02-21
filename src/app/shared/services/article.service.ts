import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Article } from "../models/article";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articlesUrl = "api/articles";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.articlesUrl)
      .pipe(catchError(this.handleError("getArticles", [])));
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http
      .get<Article>(url)
      .pipe(catchError(this.handleError<Article>(`getArticle id=${id}`)));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
