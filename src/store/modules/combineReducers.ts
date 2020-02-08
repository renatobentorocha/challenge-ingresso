import { combineReducers } from 'redux';
import todoReducer from './todo_list/reducer';
import filmsReducer from './films/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  films: filmsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
