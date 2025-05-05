import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _http: HttpClient) {}

  getAllBooks() {
    return this._http.get('data/books.json');
  }
}
