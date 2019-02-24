import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articlesUrl = "api/articles";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  searchArticles(term: string): Observable<Article[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articlesUrl}/?title=${term}`);
  }
}
