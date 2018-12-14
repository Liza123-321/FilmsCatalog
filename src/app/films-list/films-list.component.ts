import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from 'src/models/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {

  films: Film[];
  page: number;

  constructor(private filmService: FilmService) {
    this.page = 1;
  }

  ngOnInit() {
    this.getFilms()
    this.page++;
  }

  getFilms(): void {
    this.filmService.getFilmsLazy(this.page).subscribe(films => this.films = films);
  }

  onScroll(): void {
    this.filmService.getFilmsLazy(this.page)
      .subscribe((data: Film[]) => {
        this.films.push(...data);
      })
    this.page++;
  }
}
