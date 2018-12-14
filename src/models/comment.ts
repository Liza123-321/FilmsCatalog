export class Comment {
   commentMessage: string;
   data: string;
   filmId: number;
   email: string;
   
   constructor(props) {
      Object.assign(this, props)
   }
}

