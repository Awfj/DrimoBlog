import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articlesUrl = "api/articles";


  private termStringSource = new Subject<string>();
  termString$ = this.termStringSource.asObservable();
  
  
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  searchArticles(searchTerm: string): Observable<Article[]> {
    if (!searchTerm.trim()) {
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articlesUrl}/?title=${searchTerm}`);
  }

  
  sendSearchTerm(searchTerm: string) {
    this.termStringSource.next(searchTerm);
  }
}
