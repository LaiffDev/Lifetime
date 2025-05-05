import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, SidenavComponent, BooksComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
