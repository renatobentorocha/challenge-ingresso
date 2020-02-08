interface ITrailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

interface IThumb {
  url: string;
  type: string;
}

export interface IMovie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: IThumb[];
  genres: string[];
  trailers: ITrailer[];
}

export interface FilmsState {
  event: IMovie[];
  loading: boolean;
}

export const LOAD_FILMS_REQUEST = '@films/LOAD_FILMS_REQUEST';

export interface LoadFilmsRequest {
  type: typeof LOAD_FILMS_REQUEST;
  payload: { cityCode: number };
}

export const LOAD_FILMS_SUCCESS = '@films/LOAD_FILMS_SUCCESS';

export interface LoadFilmsSuccess {
  type: typeof LOAD_FILMS_SUCCESS;
  payload: { movies: IMovie[] };
}

export type FilmsActionsTypes = LoadFilmsRequest | LoadFilmsSuccess;
