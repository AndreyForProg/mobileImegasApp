import {combineReducers} from 'redux';
import MainPageReducer from './MainPageReducer';

const reducers = combineReducers({
  images: MainPageReducer,
});

export default reducers;
