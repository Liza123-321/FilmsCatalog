import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Comment } from 'src/models/comment';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  isLogin: boolean;
  id: number;

  public commentForm: FormGroup = new FormGroup({
    message: new FormControl('', [Validators.required]),
  })

  constructor(private filmService: FilmService, private route: ActivatedRoute, private commentsService: CommentsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLogin = sessionStorage.getItem('jwt_token') !== null;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getComments();
  }

  getComments(): void {
    this.commentsService.getFilmComments(this.id).subscribe(comments => this.comments = comments);
  }

  sendComment(): void {
    let now = new Date();
    let dateNow = now.getDate() +
      '/' +
      now.getMonth() +
      '/' +
      now.getFullYear() +
      ' ' +
      now.getHours() +
      ':' +
      now.getMinutes() +
      ':' +
      now.getSeconds();

    this.commentsService.sendComment(new Comment({ commentMessage: this.commentForm.controls.message.value, data: dateNow, filmId: this.id }))
      .subscribe(comment => {

        this.commentForm.controls.message.setValue("");

        let email = sessionStorage.getItem('email');

        this.comments.push(new Comment({ commentMessage: comment.commentMessage, data: comment.data, email: email }));
        this.toastr.success('Success add comment!', 'Films Service');
      })
  }
}
