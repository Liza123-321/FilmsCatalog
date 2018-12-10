import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddComment } from 'src/models/addComment';
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from 'src/models/comment';
import { commentUrl } from './consts'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('jwt_token')
  })
};

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) { }

  sendComment(comment: AddComment): Observable<any> {
    return this.http.post(commentUrl, comment, httpOptions)
  }
}
