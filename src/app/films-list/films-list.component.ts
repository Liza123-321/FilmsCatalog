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

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getFilms()
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe(films => this.films = films);
  }

}
