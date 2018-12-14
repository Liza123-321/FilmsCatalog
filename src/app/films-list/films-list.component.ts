import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from 'src/models/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films: Film[];
  page: number;

  constructor(private filmService: FilmService) { 
    this.page = 1;
  }

  ngOnInit() {
    this.getFilms()
    this.page ++;
  }

  getFilms(): void {
    this.filmService.getFilmsLazy(this.page).subscribe(films => this.films = films);
  }

  onScroll() {
    console.log('scrolled!!');
    this.filmService.getFilmsLazy(this.page)
      .subscribe((data: Film[])=> {
        data.forEach(film => {
          this.films.push(film);
        });
      })
      this.page ++;
  }
}
