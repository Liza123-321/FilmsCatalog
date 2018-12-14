const createUrl = path => `https://localhost:5001/api${path}`;

export const commentUrl = createUrl("/comments");
export const loginUrl = createUrl("/user/login");
export const registerUrl = createUrl("/user/register");
export const filmsUrl = createUrl("/film");
export const filmsLazyUrl = createUrl("/film/lazy");
export const galleryUrl = createUrl("/photogallery");
export const ratingUrl = createUrl("/rating");

export const pageSize = 10;
