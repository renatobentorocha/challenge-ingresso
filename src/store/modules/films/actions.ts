import {
  FilmsActionsTypes,
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
  IEvent,
} from './types';

export function loadFilmsRequest(cityCode: number): FilmsActionsTypes {
  return {
    type: LOAD_FILMS_REQUEST,
    payload: { cityCode },
  };
}

export function loadFilmsSuccess(events: IEvent[]): FilmsActionsTypes {
  return {
    type: LOAD_FILMS_SUCCESS,
    payload: { events },
  };
}
