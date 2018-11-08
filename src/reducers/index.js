import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import yelpReducer from './yelp_reducer';

const rootReducer = combineReducers({
  user: usersReducer,
  yelp: yelpReducer
});

export default rootReducer;
