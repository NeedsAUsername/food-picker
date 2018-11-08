import {combineReducers} from 'redux';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  user: usersReducer
});

export default rootReducer;
