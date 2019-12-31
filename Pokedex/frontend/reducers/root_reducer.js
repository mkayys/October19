import { combineReducers } from 'redux';
import entitiesReducer from './entitites_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer
});


export default rootReducer;