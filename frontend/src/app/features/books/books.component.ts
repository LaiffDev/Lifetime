import { Component } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  constructor(private booksService: BooksService) {}

  books: any;

  ngOnInit() {
    this.fetchAllBooks();
  }

  fetchAllBooks() {
    this.booksService.getAllBooks()!.subscribe({
      next: (res) => {
        console.log(res);
        this.books = res;
      },
      error: (err) => {
        console.error('Error fetching for books : ', err);
      },
    });
  }
}
