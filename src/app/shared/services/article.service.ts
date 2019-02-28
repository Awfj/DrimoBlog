import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article";
import { Observable, of, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  private articlesUrl = "api/articles";


  private searchTermSource = new Subject<string>();
  termString$ = this.searchTermSource.asObservable();
  
  private searchAuthorSource = new Subject<string>();
  authorString$ = this.searchAuthorSource.asObservable();
  
  private searchDateSource = new Subject<string>();
  dateString$ = this.searchDateSource.asObservable();
  
  
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
    this.searchTermSource.next(searchTerm);
  }

  searchByAuthor(author: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?author=${author}`)
  }

  sendAuthor(author: string) {
    this.searchAuthorSource.next(author);
  }

  searchByDate(date: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articlesUrl}/?date=${date}`)
  }

  sendDate(date: string) {
    this.searchDateSource.next(date);
  }
}
