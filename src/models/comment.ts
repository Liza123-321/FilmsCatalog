export class Comment {
   commentMessage: string;
   data: string;
   email: string;
   constructor(commentMessage: string, data: string, email: string) {
      this.commentMessage = commentMessage;
      this.data = data;
      this.email = email;
   }
}

