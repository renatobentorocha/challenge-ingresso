import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadFilmsSuccess } from './actions';
import { LoadFilmsRequest, LOAD_FILMS_REQUEST } from './types';

export function* loadFilms(action: LoadFilmsRequest) {
  try {
    const { cityCode } = action.payload;

    const response = yield call(
      api.get,
      `/highlights/${cityCode}/partnership/home`
    );

    console.log(response.data);
    yield put(loadFilmsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest(LOAD_FILMS_REQUEST, loadFilms)]);
