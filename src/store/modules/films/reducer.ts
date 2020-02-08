import {
  FilmsState,
  FilmsActionsTypes,
  LOAD_FILMS_REQUEST,
  LOAD_FILMS_SUCCESS,
} from './types';

const initialState: FilmsState = {
  event: [],
  loading: false,
};

export default function todoReducer(
  state = initialState,
  action: FilmsActionsTypes
): FilmsState {
  switch (action.type) {
    case LOAD_FILMS_REQUEST:
      return { ...state, loading: true };

    case LOAD_FILMS_SUCCESS:
      return { event: action.payload.movies, loading: false };

    default:
      return state;
  }
}
