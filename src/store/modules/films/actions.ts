import {
  FilmsActionsTypes,
  LoadFilmsRequest,
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  IEvent,
} from './types';

export function loadFilmsRequest(cityCode: number): LoadFilmsRequest {
  return {
    type: LOAD_FILMS_REQUEST,
    payload: { cityCode },
  };
}

export function loadFilmsSuccess(
  events: IEvent[],
  cityCode: number
): FilmsActionsTypes {
  return {
    type: LOAD_FILMS_SUCCESS,
    payload: { events, cityCode },
  };
}
