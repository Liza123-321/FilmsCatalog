import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { Photo } from 'src/models/photo';
import { ToastrService } from 'ngx-toastr';
import { Rating } from 'src/models/rating';
import { Film } from 'src/models/film';


@Component({
  selector: 'app-film-more-info',
  templateUrl: './film-more-info.component.html'
})
export class FilmMoreInfoComponent implements OnInit {
  galleryId = 'mixedExample';
  film: Film;
  photoRes: Photo[];
  isLogin: boolean;
  id: number;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLogin = sessionStorage.getItem('jwt_token') !== null;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getFilm();
    this.getPhotoRes();
  }

  getFilm(): void {
    this.filmService.getFilm(this.id).subscribe(film => this.film = film);
  }

  getPhotoRes(): void {
    this.filmService.getFilmGallery(this.id).subscribe(photos => this.photoRes = photos);
  }

  goBack(): void {
    this.location.back();
  }

  onValueChange = ($event): void => {
    this.filmService.setFilmRating(new Rating({mark: $event * 2, filmId: this.id}))
      .subscribe((data) => {
        this.getFilm();
        this.toastr.success('Success set rating!', 'Films Service');
      })
  };

  logout(): void {
    this.toastr.success('Success Logout!', 'Films Service');
    this.location.back();
    sessionStorage.removeItem('jwt_token');
    sessionStorage.removeItem('email');
  }
}
