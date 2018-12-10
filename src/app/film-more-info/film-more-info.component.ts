import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmMoreInfo } from 'src/models/filmMoreInfo';
import { FilmService } from '../film.service';
import { Location } from '@angular/common';
import { PhotoRes } from 'src/models/photoRes';
import { GalleryItem } from '@ngx-gallery/core';
import { ToastrService } from 'ngx-toastr';
import { Rating } from 'src/models/rating';


@Component({
  selector: 'app-film-more-info',
  templateUrl: './film-more-info.component.html',
  styleUrls: ['./film-more-info.component.css']
})
export class FilmMoreInfoComponent implements OnInit {
  galleryId = 'mixedExample';
  film: FilmMoreInfo;
  photoRes: PhotoRes[];
  images: GalleryItem[];
  isLogin: boolean;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('jwt_token') !== null ? true : false;
    this.getFilm();
    this.getPhotoRes();
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).subscribe(film => this.film = film);
  }

  getPhotoRes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilmGallery(id).subscribe(photos => this.photoRes = photos);
  }

  goBack(): void {
    this.location.back();
  }

  onValueChange = ($event) => {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.setFilmRating(new Rating($event * 2, id))
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
