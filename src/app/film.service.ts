import { Injectable } from '@angular/core';
import { Film } from 'src/models/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmMoreInfo } from 'src/models/filmMoreInfo';
import { PhotoRes } from 'src/models/photoRes';
import { Comment } from 'src/models/comment';
import { commentUrl, galleryUrl, filmsUrl, ratingUrl } from './consts'
import { Rating } from 'src/models/rating';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('jwt_token')
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

  getFilm(id: number): Observable<FilmMoreInfo> {
    const url = `${filmsUrl}/${id}`;
    return this.http.get<FilmMoreInfo>(url);
  }

  getFilmGallery(id: number): Observable<PhotoRes[]> {
    const url = `${galleryUrl}/${id}`;
    return this.http.get<PhotoRes[]>(url);
  }

  getFilmComments(id: number): Observable<Comment[]> {
    const url = `${commentUrl}/${id}`;
    return this.http.get<Comment[]>(url);
  }

  setFilmRating(rating: Rating): Observable<any>{
    return this.http.post(ratingUrl, rating, httpOptions);
  }
}
