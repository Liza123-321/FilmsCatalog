import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Comment } from 'src/models/comment';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { ToastrService } from 'ngx-toastr';
import { AddComment } from 'src/models/addComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  isLogin: boolean;

  public commentForm: FormGroup = new FormGroup({
    message: new FormControl('', [Validators.required]),
  })

  constructor(private filmService: FilmService, private route: ActivatedRoute, private commentsService: CommentsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.isLogin = sessionStorage.getItem('jwt_token') !== null ? true : false;
    this.getComments();
  }

  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilmComments(id).subscribe(comments => this.comments = comments);
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

    const id = +this.route.snapshot.paramMap.get('id');

    this.commentsService.sendComment(new AddComment(this.commentForm.controls.message.value, dateNow, id))
      .subscribe(comment => {

        this.commentForm.controls.message.setValue("");

        let email = sessionStorage.getItem('email');

        this.comments.push(new Comment(comment.commentMessage, comment.data, email));
        this.toastr.success('Success add comment!', 'Films Service');
      })
  }
}
