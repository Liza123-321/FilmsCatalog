export class AddComment {
   commentMessage: string;
   filmId: number;
   data: string;
   constructor(commentMessage: string, data: string, filmId: number) {
      this.commentMessage = commentMessage;
      this.data = data;
      this.filmId = filmId;
   }
}