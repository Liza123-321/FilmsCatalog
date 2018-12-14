export class Film {
    id: number;
    name: string;
    poster: string;
    averageRating: number;
    constructor(id: number, name: string, poster: string, averageRating: number) {
        this.id = id;
        this.name = name;
        this.poster = poster;
        this.averageRating = averageRating;
    }
}