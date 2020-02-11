import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import api from '../services/api';
import {
  loadFilmsRequest,
  loadFilmsSuccess,
} from '../store/modules/films/actions';
import { loadFilms } from '../store/modules/films/sagas';
import event from './event';

const apiMock = new MockAdapter(api);

describe('loading films', () => {
  it('should be able to get all films by city code (1 São Paulo)', async () => {
    const dispatch = jest.fn();

    const city = 1;

    apiMock.onGet(`/city/${city}/event`).reply(200, [event]);

    await runSaga({ dispatch }, loadFilms, loadFilmsRequest(city)).toPromise();

    expect(dispatch).toHaveBeenCalledWith(loadFilmsSuccess([event], city));
  });
});
