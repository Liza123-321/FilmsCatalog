export class Film {
    id: number;
    name: string;
    year: number;
    country: string;
    poster: string;
    producer: string;
    description: string;
    video: string;
    averageRating: number;
    
    constructor(props) {
        Object.assign(this, props);
    }
}