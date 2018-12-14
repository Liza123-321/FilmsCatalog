import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/models/comment';
import { commentUrl } from './consts'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('jwt_token')}`
  })
};

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http: HttpClient) { }

  sendComment(comment: Comment): Observable<any> {
    return this.http.post(commentUrl, comment, httpOptions)
  }

  getFilmComments(id: number): Observable<Comment[]> {
    const url = `${commentUrl}/${id}`;
    return this.http.get<Comment[]>(url);
  }
  
}
