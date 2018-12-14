export class FilmMoreInfo {
    id: number;
    name: string;
    year: number;
    country: string;
    poster: string;
    producer: string;
    description: string;
    video: string;
    averageRating: number;
    constructor(id: number, name: string, year: number, country: string, poster: string, producer: string, description: string, video: string, averageRating: number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.country = country;
        this.poster = poster;
        this.producer = producer;
        this.description = description;
        this.video = video;
        this.averageRating = averageRating;
    }
}

