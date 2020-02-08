import {
  FilmsActionsTypes,
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  IMovie,
} from './types';

export function loadFilmsRequest(cityCode: number): FilmsActionsTypes {
  return {
    type: LOAD_FILMS_REQUEST,
    payload: { cityCode },
  };
}

export function loadFilmsSuccess(movies: IMovie[]): FilmsActionsTypes {
  return {
    type: LOAD_FILMS_SUCCESS,
    payload: { movies },
  };
}
