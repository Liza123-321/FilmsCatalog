import { Injectable } from '@angular/core';
import { Film } from 'src/models/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/photo';
import { galleryUrl, filmsUrl, ratingUrl, filmsLazyUrl } from './consts'
import { Rating } from 'src/models/rating';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('jwt_token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(filmsUrl);
  }

  getFilmsLazy(page: number): Observable<Film[]> {
    const url = `${filmsLazyUrl}/${page}`;
    return this.http.get<Film[]>(url);
  }

  getFilm(id: number): Observable<Film> {
    const url = `${filmsUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  getFilmGallery(id: number): Observable<Photo[]> {
    const url = `${galleryUrl}/${id}`;
    return this.http.get<Photo[]>(url);
  }

  setFilmRating(rating: Rating): Observable<any> {
    return this.http.post(ratingUrl, rating, httpOptions);
  }
}
